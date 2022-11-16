const { parse } = require("dotenv");
const express = require("express");
const router = express.Router();
const Budget = require("../models/budget")





router.get("/", (req, res) => {
    let bankAccount = 0;
    Budget.forEach((item) => {
        bankAccount += parseInt(item.amount)
    })
    

    res.render("budget/index.ejs", {
        Budget: Budget,
        Account: bankAccount
    })
})

router.get("/new", (req, res) => {
    res.render("budget/new.ejs")
})

router.post("/", (req, res) => {
    req.body.tags = req.body.tags ? req.body.tags : ""
    Budget.push(req.body)
    res.redirect("/budgets")
})

router.get("/:id", (req, res) => {
    res.render("budget/show.ejs", {
        item: Budget[req.params.id],
        index: req.params.id
    } )
})



module.exports = router