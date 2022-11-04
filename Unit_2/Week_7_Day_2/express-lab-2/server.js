const express = require("express");
const app = express();
PORT = 3000

const options = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get("/greeting", (request, response) => {
    response.send("Howdy there stranger")
})

app.get("/greeting/:name", (request, response) => {
    response.send(`Howdy there, ${request.params.name}! It's great to see you!`)
})

app.get("/tip/:total/:tipPercentage", (request, response) => {
    response.send(`${request.params.total * (request.params.tipPercentage * .01)}`)
})

app.get("/magic/:question", (request, response) => {
    const randomIndex = Math.floor(Math.random() * options.length)
    console.log(randomIndex);
    response.send(`<h1>Question: ${request.params.question}?</h1></br><h1>Answer: ${options[randomIndex]}</h1>`)
})

app.listen(PORT, (request, response) => {
    console.log("Listening on port: ", PORT)
}); 