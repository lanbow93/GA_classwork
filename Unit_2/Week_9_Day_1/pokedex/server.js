// Import Dependencies
const express = require("express");
const methodOverride = require("method-override");
const PokemonRouter = require("./controllers/pokemon");
const morgan = require("morgan")
require("dotenv").config()

// Global Variables
const PORT = process.env.PORT

// Generating app object
app = express();

// Middleware
app.use(methodOverride("_method"));
app.use("/static", express.static("public"));
app.use(morgan("tiny"))
app.use(express.urlencoded({extended: true})) // parse HTML form data 
app.use("/pokemon", PokemonRouter)

// Route to test server
app.get("/", (req, res) => {
    res.send("Pokemon Server is functional and running")
})

// App listener
app.listen(PORT, (req, res) => {
    console.log(`Listening on port: ${PORT}`);
})
