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
        {species: "chimpanzee", isExtinct: false, location: "West Africa", lifeExpectancy: 50, image: "https://t4.ftcdn.net/jpg/00/04/48/31/360_F_4483177_DyXLGT3bPj4cIocli5Tyh7XUfUjwJtNM.jpg"},
        {species: "dodo", isExtinct: true, location: "Mauritius", lifeExpectancy: 30, image: "https://images.ctfassets.net/cnu0m8re1exe/6sNqiFXX253nMZjuX2em3I/e0a9b5c7e9a758cc6bc65e3f2e11dcb3/shutterstock_1301615152.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill"},
        {species: "panda", isExtinct: false, location: "China", lifeExpectancy: 20, image: "https://cdn.britannica.com/80/150980-050-84B9202C/Giant-panda-cub-branch.jpg"},
    ])
    res.json(animals)
})

// Index route
router.get("/", async (req, res) => {
    const animals = await Animal.find({}).catch((error => errorHandler(error, res)))
    res.render("animals/index.ejs", {animals})
})

// New Route
router.get("/new", (req, res) => {
    res.render("animals/new.ejs");
})

// Destroy Route

router.delete("/:id", async (req, res) => {
    await Animal.findByIdAndRemove(req.params.id).catch((error => errorHandler(error, res)))
    res.redirect("/animals")
})

// Update Route

// Create Route

// Edit Route

// Show Route
router.get("/:id", async (req, res) => {
    const animal =  await Animal.findById(req.params.id).catch((error => errorHandler(error, res)))
    res.render("animals/show.ejs", {animal})
})








module.exports = router;