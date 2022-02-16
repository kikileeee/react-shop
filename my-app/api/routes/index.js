var express = require('express');
var app = express.Router();
const { createPool } = require('mysql');

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: 'shopreact'
});


/* GET home page. */
app.get('/', function (req, res, next) {
  pool.query(`SELECT * FROM products`, (error, data) => {
    res.send(data)
  })
});

module.exports = app;
