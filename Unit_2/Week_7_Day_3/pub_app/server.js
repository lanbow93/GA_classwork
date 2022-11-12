// Importing dependencies
require("dotenv").config();
const express = require("express");

// Global Variables
const PORT = process.env.PORT;

// Creating app object
const app = express();

// Middleware
// app.use("/")

// Routes

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

// Creating a listener
app.listen(PORT, (req, res) => {
    console.log(`Listening on port: ${PORT}`);
})