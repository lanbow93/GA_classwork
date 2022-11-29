const express = require("express");
const Animal = require("../models/animal");

// Creating a router variable
const router = express.Router();

// Ways to deal with errors
function errorCatcher(error, res) {
    res.json(error)
}

// SEED Route
router.get("/seed", async (req, res) => {
    await Animal.remove({}).catch((error => errorHandler(error, res)))
    const animals = await Animal.create([
        {species: "chimpanzee", extinct: false, location: "West Africa", lifeExpectancy: 50},
        {species: "dodo", extinct: true, location: "Mauritius", lifeExpectancy: 30},
        {species: "panda", extinct: false, location: "China", lifeExpectancy: 20},
    ])
    res.json(animals)
})

// Index route
router.get("/", async (req, res) => {
    const animals = await Animal.find({}).catch((error => errorHandler(error, res)))
    res.render("animals/index.ejs", {animals})
})




module.exports = router;