const express = require('express');
const app = express();

app.get('/Homer', (request, response) => {
    response.send("DOH");
});

app.get('/Marge', (request, response) => {
    response.send("Oh, I've always wanted to use rosemary in something!");
});

app.get('/Bart', (request, response) => {
    response.send("Cowabunga dude!");
});

app.get('/Lisa', (request, response) => {
    response.send("When the Jazz Man testifies")
})

app.get("/Maggie", (request, response) => {
    response.send("Daddy")
})

app.get("Snowball_II", (request, response) => {
    response.send("Meow!")
})

app.get("Santas_Little_Helper", (request, response) => {
    response.send("Woof!")
})
app.listen(3000, (request, response) => {

})