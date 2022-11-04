const express = require("express");
const app = express();
PORT = 3000

app.get("/greeting", (request, response) => {
    response.send("Howdy there stranger")
})

app.get("/greeting/:name", (request, response) => {
    response.send(`Howdy there, ${request.params.name}! It's great to see you!`)
})

app.listen(PORT, (request, response) => {
    console.log("Listening on port: ", PORT)
}); 