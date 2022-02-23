const express = require('express');
const app = express.Router();
const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'shopreact'
});

app.post('/', function (req, res, next) {
    console.log(req.body.productid)
    pool.query(`SELECT * FROM comment where productid = ${req.body.productid}`, (error, data) => {
        res.send(data)
    })
});

module.exports = app;