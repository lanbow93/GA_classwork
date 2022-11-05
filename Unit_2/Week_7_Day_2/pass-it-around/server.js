const express = require("express");
const app = express();
PORT = 3000;

app.get("/", (request, response) => {
    response.send(`<h1>99 bottles of beer on the wall.</h1></br><a href="/98">You take one down and pass it around</a>`);
})

app.get("/:number_of_bottles", (request, response) => {
    
    if(request.params.number_of_bottles > 1) {
        response.send(`<h1>${request.params.number_of_bottles} bottles of beer on the wall.</h1></br><a href="/${request.params.number_of_bottles-1}"">You take one down and pass it around</a>`);
        
    } else if (request.params.number_of_bottles > 0) {
        response.send(`<h1>${request.params.number_of_bottles} bottle beer on the wall.</h1></br><a href="/${request.params.number_of_bottles-1}">You take one down and pass it around</a>`); 
    } else {
        response.send(`<h1>${request.params.number_of_bottles} bottles of beer on the wall.</h1></br><a href="/">Reset To Beginning</a>`)
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})