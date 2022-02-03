const router = require('express').Router();
const fs = require('fs');
const path = require('path');

//need a get 
router.get('/notes', (req, res) => {
    let data = fs.readFileSync("./db/db.json");
    let notes = JSON.parse(data);
    res.json(notes);
});

//need a post route that gets req . body and writes into db . jso