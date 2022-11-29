// Importing Dependencies
require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const methodOverride = require("method-override")
const animalRouter = require("./controllers/animal");

// Creating application object
const app = express();

// Middleware
app.use(methodOverride("_method"));
app.use(morgan("tiny"));
app.use(express.urlencoded({extended: true}));
app.use("/static", express.static("public"))
app.use("/animals", animalRouter)

// Routes

app.get("/", (req, res) => {
    res.send(`Successfully reached the Animals Server`)
})

// App listener
const PORT = process.env.PORT || 3333
app.listen(PORT, (req, res) => {
    console.log(`Listening on port: ${PORT}`)
})