const express = require("express");
const Pokemon = require("../models/pokemon")
const router = express.Router();

// INDUCES

// Index Route
router.get("/", (req, res) => {
    const pageNumber = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
    res.render("pokemon/index.ejs", {
        AllPokemon: Pokemon,
        page: pageNumber
    })
})

// Destroy
router.delete("/:id"), (req, res) => {
    Pokemon.splice(Integer(request.params.id), 1)
    res.redirect("/");
}

// Update

// Create




//Show 
router.get("/:id", (req, res) => {
    res.render("pokemon/show.ejs", {
        Pokemon: Pokemon,
        index: [req.params.id]
    })
})



module.exports = router