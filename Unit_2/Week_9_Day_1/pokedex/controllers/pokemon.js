const express = require("express");
const pokemon = require("../models/pokemon");
const Pokemon = require("../models/pokemon")
const router = express.Router();

router.get("/", (req, res) => {
    const pageNumber = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
    console.log(pageNumber)
    res.render("pokemon/index.ejs", {
        AllPokemon: Pokemon,
        page: pageNumber
    })
})



module.exports = router