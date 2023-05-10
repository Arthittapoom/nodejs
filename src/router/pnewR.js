const express = require('express');

const pnewsRuter = express.Router();

const pnews = require("../data/pnews.json")

pnewsRuter.route("/").get((req,res)=>{
    res.render("pnews",{
        pnews,
});
})

pnewsRuter.route("/:id").get((req,res)=>{
    const id = req.params.id;
    res.render("pnew",{
        pnew : pnews[id],
    })
});

module.exports = pnewsRuter;