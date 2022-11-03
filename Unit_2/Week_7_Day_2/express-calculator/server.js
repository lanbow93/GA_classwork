const express = require ("express")
const app = express();
const port = 3000;

app.get("/calc/:num1/:num2", (request, response) => {
    response.send(`The sum is: ${parseInt(request.params.num1) + parseInt(request.params.num2)}`)
})

app.get("/calcquery/:num1/:num2", (request, response) => {
    let toCompare = request.query.operation
    if (toCompare === "add") {
        response.send(`The value after adding is: ${parseInt(request.params.num1) + parseInt(request.params.num2)}`)
    } else if (toCompare === "multiply") {
        response.send(`The value after multiplying is: ${parseInt(request.params.num1) * parseInt(request.params.num2)}`)
    } else if (toCompare === "subtract"){ 
        response.send(`The value after subtracting is: ${parseInt(request.params.num1) - parseInt(request.params.num2)}`)
    } else if (toCompare === "divide"){
        response.send(`The value after dividing is: ${parseInt(request.params.num1) / parseInt(request.params.num2)}`)
    } else if (toCompare === "toThePower") {
        response.send(`The value after raising to the power of ${request.params.num2} is: ${parseInt(request.params.num1) ** parseInt(request.params.num2)}`)
    } else {
        response.send("Invalid/No Operation")
    }
})

app.listen(port, (request, response) => {
    console.log(`Express is listening on port: `, port);
});

