const mongoose = require("./connection");

// Creating a schema for our animal

const animalSchema = new mongoose.Schema({
    species: {type: String, required: true},
    extinct: Boolean,
    location: {type: String, required: true},
    lifeExpectancy: {type: Number, required: true}

}, {timestamps: true});


const Animal = mongoose.model("Animal", animalSchema);


// Exporting the model of animals
module.exports = Animal;