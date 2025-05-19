const connect = require("./connect");
const express = require("express");
const cors = require("cors");
const vehicles = require("./vehicleRoutes");
const users = require("./userRoutes");
const inquiries = require("./inquiryRoutes");
require("dotenv").config({path: "./config.env"});

const PORT = process.env.PORT;

const app = express();


app.use(cors());
app.use(express.json());
app.use(vehicles);
app.use(users);
app.use(inquiries);


app.listen(PORT || 3000, () => {
    connect.connectToServer();
    console.log("Server is running on port " + (PORT || 3000));
});