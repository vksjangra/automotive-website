const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({path: "./config.env"});

let userRoutes = express.Router();
const SALT_ROUNDS = 6;

// #1: Retrieve All
userRoutes.route("/users").get(async (request, response) => {
    let db = database.getDB();
    let data = await db.collection("users").find({}).toArray();
    if (data && data.length > 0) {
        response.json(data);
    } else {
        throw new Error("Failed to retrieve data from database");
    }
});


// #2: Retrieve One
userRoutes.route("/users/:id").get(async (request, response) => {
    let db = database.getDB();
    let data = await db.collection("users").findOne({ __id: new ObjectId(request.params.id) });
    if (data && Object.keys(data).length > 0) {
        response.json(data);
    } else {
        throw new Error("Failed to retrieve data from database");
    }
});


// #3: Create One
userRoutes.route("/users").post(async (request, response) => {
    let db = database.getDB();

    const takenEmail = await db.collection("users").findOne({ email: request.body.email });

    if (takenEmail) {
        response.json({ message: "The email is not available" });
    } else {
        const hash = await bcrypt.hash(request.body.password, SALT_ROUNDS);

        let mongoObject = {
            name: request.body.name,
            email: request.body.email,
            password: hash,
            joinDates: new Date(),
            vehicles: []
        };
        let data = await db.collection("users").insertOne(mongoObject);
        response.json(data);
    };
});


// #4: Update One
userRoutes.route("/users/:id").put(async (request, response) => {
    let db = database.getDB();
    let mongoObject = {
        $set: {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            joinDates: request.body.joinDates,
            vehicles: request.body.vehicles
        }
    };
    let data = await db.collection("users").updateOne({ __id: new ObjectId(request.params.id) }, mongoObject);
    response.json(data);
});


// #5: Delete One
userRoutes.route("/users/:id").delete(async (request, response) => {
    let db = database.getDB();
    let data = await db.collection("users").deleteOne({ __id: new ObjectId(request.params.id) });
    response.json(data);
});


// #3: Login
userRoutes.route("/users/login").post(async (request, response) => {
    let db = database.getDB();

    const user = await db.collection("users").findOne({ email: request.body.email });

    if (user) {
        let confirmation = await bcrypt.compare(request.body.password, user.password);
        if (confirmation) {
            const token = jwt.sign(user, process.env.SECRET_KEY, {expiresIn: "24h"});
            response.json({success: true, token});
        } else {
            response.json({success: false, message: "Incorrecr Password"});
        };
    } else {
        response.json({success: false, message: "User not found"});
    };
    
});



module.exports = userRoutes;