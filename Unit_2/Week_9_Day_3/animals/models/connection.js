// Importing Dependencies
require("dotenv").config();
const mongoose = require("mongoose");

// Establishing connection to animals database
mongoose.connect(process.env.DATABASE_URL)

// Setting up connection events
mongoose.connection
.on("open", () => {console.log("Successfully connected to Mongo")})
.on("close", () => {console.log("Disconnected from Mongo")})
.on("error", (error) => {console.log(error)})

module.exports = mongoose