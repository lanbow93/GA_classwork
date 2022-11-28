const express = require("express");
const Animal = require("../models/animal");

// Creating a router variable
const router = express.Router();

// Ways to deal with errors
function errorCatcher(error, res) {
    res.json(error)
}





module.exports = router;