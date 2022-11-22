const express = require("express");
const pokemon = require("../models/pokemon");
const Pokemon = require("../models/pokemon")
const router = express.Router();
let pageCounter = {
    page: 0,
    forward: function() { 
        if(this.page = Math.ceil(Pokemon.length /6)) {
            this.page = 0
            console.log(this.page)
        } else {
            this.page += 1;
            console.log(this.page)
        }
    },
    backward: function() {
        if (this.page = 0) {
            this.page = Math.ceil(Pokemon.length /6);
            console.log(this.page)
        } else {
            this.page -= 1
            console.log(this.page)
        }
    },
    reset: function() { 
        this.page = 0
        console.log(this.page)
    }
}

pageCounter.forward

router.get("/", (req, res) => {
    res.render("pokemon/index.ejs", {
        AllPokemon: Pokemon,
        pageTracker: pageCounter
    })
})



module.exports = router