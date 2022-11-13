// Importing dependencies
const express = require("express");
const drinks = require("../models/drinks");
const food = require("../models/food");
const router = require("./pub");

// Creating router
const Router = express.Router()

// Creating food routes

Router.get("/food/:id", (req, res) => {
    res.send("Make it to the food router")
})


module.exports = Router
