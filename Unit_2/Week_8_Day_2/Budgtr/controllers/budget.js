const express = require("express");
const router = express.Router();
const Budget = require("../models/budget")

router.get("/", (req, res) => {
    res.render("budget/index.ejs", {
        Budget: Budget
    })
})

router.get("/:id", (req, res) => {
    res.render("budget/show.ejs", {
        item: Budget[req.params.id],
        index: req.params.id

    } )
})



module.exports = router