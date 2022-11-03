const { response } = require ("express");
const express = require("express")

const app = express();
const PORT = 3000;

app.get("/:ia/:instructor", (request, response) => {
    console.log(request.params)
    response.send("here are some free samples")
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})