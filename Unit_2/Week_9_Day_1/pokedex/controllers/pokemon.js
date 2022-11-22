const express = require("express");
const pokemon = require("../models/pokemon");
const Pokemon = require("../models/pokemon")
const router = express.Router();
let page = 0
const pageCounter = {
    forward: function() { 
        if(page === Math.ceil(Pokemon.length /6)) {
            page = 0
            console.log(page)
        } else {
            page += 1;
            console.log(page)
        }
    },
    backward: function() {
        if (page === 0) {
            page = Math.ceil(Pokemon.length /6);
            console.log(page)
        } else {
            page -= 1
            console.log(page)
        }
    },
    reset: function() { 
        page = 0
        console.log(page)
    }
}

router.get("/", (req, res) => {
    res.render("pokemon/index.ejs", {
        AllPokemon: Pokemon,
        pageTracker: pageCounter,
        page: page
    })
})



module.exports = router