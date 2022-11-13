// Importing dependencies
const express = require("express");
const drinks = require("../models/drinks");
const food = require("../models/food");
const router = require("./pub");

// Creating router
const Router = express.Router()

// Creating food routes

Router.get("/", (req, res) => {
    res.send("Made it to the food router")
})

Router.get("/:id", (req, res) => {
    res.render("food_show.ejs", {
        food: food,
        id: req.params.id
    });
})


module.exports = Router
