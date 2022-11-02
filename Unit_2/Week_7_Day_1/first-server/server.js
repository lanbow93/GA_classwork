const express = require("express");
//console.log(express)
const app = express()

app.get("/", (request, response) => {
    console.log(request)
    response.send("Hello World")
})

app.listen(3000, () => {
    console.log("Express is listening for requests from the browser")
})