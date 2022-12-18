const express = require("express");
require("dotenv").config()

const app = express()

const PORT = process.env.PORT;
const coffees = require("./models/coffee")

//app.set("view engine", "ejs")

app.get("/coffees", (req, res) => {
    res.render("coffee_index.ejs", { coffees: coffees})
})


app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
})