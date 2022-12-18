// ~~~~~~~~~~ Import Dependencies ~~~~~~~~~~ //
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const PORT = process.env.PORT

const app = express();

// ~~~~~~~~~~ Database Connections ~~~~~~~~~~ //

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Eatablish our connection
mongoose.connect(DATABASE_URL, CONFIG)

// log connection events from mongoose 
mongoose.connection
    .on("open", ()=> console.log("Mongoose Connected"))
    .on("close", ()=> console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.log(error))

    
// ~~~~~~~~~~ Fruits Model ~~~~~~~~~~ //

const {Schema, model } = mongoose

// Make fruits schemas
const fruitsSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean
})

const Fruit = model("Fruit", fruitsSchema)

// ~~~~~~~~~~ Middlewares ~~~~~~~~~~ //

app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request bodies
app.use(express.static("public")) // serve files from public statically


// ~~~~~~~~~~ Routes ~~~~~~~~~~ //

app.get("/", (req, res) => {
    res.send("Server is functional")
})

app.get("/fruits/seed", (req, res) => {
    // Define data we want to put in the database
    const startingFruits = [
        { name: "Orange", color: "orange", readyToEat: false },
        { name: "Grape", color: "purple", readyToEat: false },
        { name: "Banana", color: "orange", readyToEat: false },
        { name: "Strawberry", color: "red", readyToEat: false },
        { name: "Coconut", color: "brown", readyToEat: false }
    ];

    // Delete all fruits
    Fruit.deleteMany({}, (err, data) => {

        // Create new fruits once old fruits are deleted
        Fruit.create(startingFruits, (err, createdFruits) => {
            res.json(createdFruits);
        });
    });
});

app.get("/fruits", (req, res) => {

    // Get all fruits from Mongo and send them back. 
    Fruit.find({})
    .then((fruits) => {
        res.json(fruits)
    })
    .catch(err => console.log(error))
})












app.listen(PORT, (req, res) => {
    console.log(`Listening on port: ${PORT}`);
});