const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;
const jwt = require("jsonwebtoken");
require("dotenv").config({path: "./config.env"});


let vehicleRoutes = express.Router();


// #1: Retrieve All
vehicleRoutes.route("/vehicles").get(async (request, response) => {
    let db = database.getDB();
    let data = await db.collection("vehicles").find({}).toArray();
    if (data && data.length > 0) {
        response.json(data);
    } else {
        throw new Error("Failed to retrieve data from database");
    }
});


// #2: Retrieve One
vehicleRoutes.route("/vehicles/:id").get(async (request, response) => {
    let db = database.getDB();
    let data = await db.collection("vehicles").findOne({__id: new ObjectId(request.params.id)});
    if (data && Object.keys(data).length > 0) {
        response.json(data);
    } else {
        throw new Error("Failed to retrieve data from database");
    }
});


// #3: Create One
vehicleRoutes.route("/vehicles").post(verifyToken, async (request, response) => {
    let db = database.getDB();
    let mongoObject = {
        name: request.body.name,
        brand: request.body.brand,
        description: request.body.description,
        details: request.body.details,
        mileage: request.body.mileage,
        fuel: request.body.fuel,
        transmission: request.body.transmission
    };
    let data = await db.collection("vehicles").insertOne(mongoObject);
    response.json(data);
});


// #4: Update One
vehicleRoutes.route("/vehicles/:id").put(verifyToken, async (request, response) => {
    let db = database.getDB();
    let mongoObject = {
        $set: {
            name: request.body.name,
            brand: request.body.brand,
            description: request.body.description,
            details: request.body.details,
            mileage: request.body.mileage,
            fuel: request.body.fuel,
            transmission: request.body.transmission,
            seller: request.body.user.__id
        }   
    };
    let data = await db.collection("vehicles").updateOne({__id: new ObjectId(request.params.id)}, mongoObject);
    response.json(data);
});


// #5: Delete One
vehicleRoutes.route("/vehicles/:id").delete(verifyToken, async (request, response) => {
    let db = database.getDB();
    let data = await db.collection("vehicles").deleteOne({__id: new ObjectId(request.params.id)});
    response.json(data);
});

function verifyToken(request, response, next) {
    const authHeaders = request.headers["authorization"];
    const token = authHeaders && authHeaders.split(" ")[1];
    if (!token) {
        return response.status(401).json("Authentication token is missing");
    }

    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
        if (error) {
            return response.status(403).json("Invalid Token");
        }

        request.body.user = user;
        next();
    });
};

module.exports = vehicleRoutes;