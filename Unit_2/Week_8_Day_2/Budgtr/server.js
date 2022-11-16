// Imports
require("dotenv").config();
const express = require("express");
const BudgetRouter = require("./controllers/budget");
const methodOverride = require("method-override");

// Global Variables
const PORT = process.env.PORT;

// Application object
const app = express();

// Middleware
app.use(methodOverride("_method"))
app.use("/static", express.static("public"))
app.use(express.urlencoded({extended: true})) // parse HTML form data 
app.use("/budgets", BudgetRouter)

// Route
app.get("/", (req, res) => {
    res.send("Budget server is working");
});


// App Listener
app.listen(PORT, (req, res) => {
    console.log(`Listening on port: ${PORT}`);
});
