var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: true}));

app.set("view engine", "jade");

app.get('/', function(req, res){
    res.render("index");
});

app.get('/login', function(req, res){
    res.render("login");
});

app.post('/users', function(req, res){
    console.log("Email: " + req.body.email);
    console.log("Contraseña: " + req.body.password);
    res.send("Ud. ha ingresado al sistema");
});

app.listen(3000);
