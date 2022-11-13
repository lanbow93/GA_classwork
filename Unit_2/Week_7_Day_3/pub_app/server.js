// Importing dependencies
require("dotenv").config();
const express = require("express");
const DrinkRouter = require("./controller/pub")
const FoodRouter = require("./controller/food")

// Global Variables
const PORT = process.env.PORT;

// Creating app object
const app = express();

// Middleware
app.use("/drinks", DrinkRouter)
app.use("/food", FoodRouter)

// Routes

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

// Creating a listener
app.listen(PORT, (req, res) => {
    console.log(`Listening on port: ${PORT}`);
})

