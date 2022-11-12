// Importing dependencies
const express = require("express");
const drinks = require("../models/drinks")

//Creating router
const router = express.Router();

// Creating routes
router.get("/", (req, res) => {
    res.render("drinks_index.ejs", {
        drinks: drinks
    })
})

router.get("/:id", (req, res) => {
    res.send(req.params.id)
})

module.exports = router