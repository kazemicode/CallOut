const express = require('express');
const app = express();
const session = require('express-session');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const port = 8080;
const ip = "0.0.0.0";
//const tools = require("./tools.js");

app.set('view engine', 'ejs');
app.use(express.static("public")); // specify the external src folder

// app.use(session({
//   secret: "top secret!",
//   resave: true,
//   saveUninitialized: true
// }));

// app.use(express.urlencoded({extended:true})); // allows us to parse POST params

// Routes
app.get("/", function(req, res){
 res.render("index");
});

app.get("/about", function(req, res){
 res.render("about");
});

app.get("/call", function(req, res){
 res.render("call");
});

app.get("/scenarios", function(req, res){
 res.render("scenarios");
});

app.get("/scenario1", function(req, res){
 res.render("scenario1");
});

app.get("/scenario2", function(req, res){
 res.render("scenario2");
});

app.get("/call", function(req, res){
 res.render("call");
});

app.get("/call2", function(req, res){
 res.render("call2");
});



// Listeners
app.listen(process.env.PORT||port, process.env.IP||ip, function() {
  console.log(`Running Express Server on ${ip}:${port}`);
});

