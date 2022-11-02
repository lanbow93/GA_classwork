const express = require("express");
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"];

app.get("/:indexOfPlantsArray", (request, response) => {
    if(plants[request.params.indexOfPlantsArray]){
        response.send(plants[request.params.indexOfPlantsArray]);
    } else {
        response.send("This is the index: " + request.params.indexOfPlantsArray)
    }
    
    response.send("This is the index: " + request.params.indexOfPlantsArray)
});

app.listen(port, () => {
    console.log("Listening on port", port);
});