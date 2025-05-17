const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;

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
vehicleRoutes.route("/vehicles").post(async (request, response) => {
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
vehicleRoutes.route("/vehicles/:id").put(async (request, response) => {
    let db = database.getDB();
    let mongoObject = {
        $set: {
            name: request.body.name,
            brand: request.body.brand,
            description: request.body.description,
            details: request.body.details,
            mileage: request.body.mileage,
            fuel: request.body.fuel,
            transmission: request.body.transmission
        }   
    };
    let data = await db.collection("vehicles").updateOne({__id: new ObjectId(request.params.id)}, mongoObject);
    response.json(data);
});


// #5: Delete One
vehicleRoutes.route("/vehicles/:id").delete(async (request, response) => {
    let db = database.getDB();
    let data = await db.collection("vehicles").deleteOne({__id: new ObjectId(request.params.id)});
    response.json(data);
});


module.exports = vehicleRoutes;