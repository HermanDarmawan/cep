const express = require("express");
const request = require("request");
const https = require("https");

const app = express()

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', function(req, res){
    res.render("home")
});

app.get('/product', function(req, res){
    res.render("product")
});

app.get('/contact', function(req, res){
    res.render("contact")
});

app.get('/about', function(req, res){
    res.render("about")
});

app.listen(3000, function(){
    console.log("Server is running");
});