const express = require("express");
const pokemon = require("../models/pokemon");
const Pokemon = require("../models/pokemon")
const router = express.Router();

router.get("/", (req, res) => {
    const pageNumber = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
    res.render("pokemon/index.ejs", {
        AllPokemon: Pokemon,
        page: pageNumber
    })
})

router.get("/:id", (req, res) => {
    res.render("pokemon/show.ejs", {
        Pokemon: Pokemon[req.params.id]
    })
})



module.exports = router