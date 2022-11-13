// Importing dependencies
const express = require("express");
const drinks = require("../models/drinks");
const food = require("../models/food");

//Creating router
const router = express.Router();

// Creating routes
router.get("/", (req, res) => {
    console.log(food)
    res.render("drinks_index.ejs", {
        drinks: drinks,
        food: food
    })
})

router.get("/:id", (req, res) => {
    res.render("drinks_show.ejs", {
        drinks: drinks,
        id: req.params.id,
    })
})

module.exports = router