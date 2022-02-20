const express = require('express');
const app = express.Router();
const { createPool } = require('mysql');


const pool = createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: 'shopreact'
});


app.get('/', function (req, res, next) {
  pool.query(`SELECT * FROM products`, (error, data) => {
    res.send(data)
    console.log(data)
  })
});

module.exports = app;
