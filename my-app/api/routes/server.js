let express = require('express')
const { router } = require('../app')
let app = express.Router()

app.get('/', function(req, res){
    res.send('api is working')
})

module.exports=app;