const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config.env" });


let inquiryRoutes = express.Router();


// #1: Retrieve All
inquiryRoutes.route("/inquiries").get(async (request, response) => {
    let db = database.getDB();
    let data = await db.collection("inquiries").find({}).toArray();
    if (data && data.length > 0) {
        response.json(data);
    } else {
        throw new Error("Failed to retrieve data from database");
    }
});


// #2: Retrieve One
inquiryRoutes.route("/inquiries/:id").get(async (request, response) => {
    let db = database.getDB();
    let data = await db.collection("inquiries").findOne({ __id: new ObjectId(request.params.id) });
    if (data && Object.keys(data).length > 0) {
        response.json(data);
    } else {
        throw new Error("Failed to retrieve data from database");
    }
});


// #3: Create One
inquiryRoutes.route("/inquiries").post(async (request, response) => {
    let db = database.getDB();
    let mongoObject = {
        name: request.body.name,
        email: request.body.email,
        message: request.body.message,
        vehicle: request.body.vehicle
    };
    let data = await db.collection("inquiries").insertOne(mongoObject);
    response.json(data);
});


// #4: Update One
inquiryRoutes.route("/inquiries/:id").put(async (request, response) => {
    let db = database.getDB();
    let mongoObject = {
        $set: {
            name: request.body.name,
            email: request.body.email,
            message: request.body.message,
            vehicle: request.body.vehicle
        }
    };
    let data = await db.collection("inquiries").updateOne({ __id: new ObjectId(request.params.id) }, mongoObject);
    response.json(data);
});


// #5: Delete One
inquiryRoutes.route("/inquiries/:id").delete(async (request, response) => {
    let db = database.getDB();
    let data = await db.collection("inquiries").deleteOne({ __id: new ObjectId(request.params.id) });
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

module.exports = inquiryRoutes;