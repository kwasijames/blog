//  blog must contain posts. Posts must contain a title, a body, and the ability to have an image, but feel free to add more as you see fit.
// Your blog must support all basic CRUD operations for posts (including forms for adding, editing, and removing posts). This might be a good time to experiment with the textarea type of input!
// Your app must be written as an Express server and be backed by a Sqlite3 database.
// You must make a new repo for this app.
// You must add, commit, and push whenever you add a feature (although you should be doing it more frequently than that!).
// You must write out a spec for your app and put it in your repo.
// Your spec should include an ERD diagramls 

// app require express
var express = require("express");
var app = express();

// Templating
var ejs = require("ejs");
app.set("view engine", "ejs");

//body parser
var bodyParser = require("body-parser");
// tell app which method to use when parsing
app.use(bodyParser.urlencoded({extended: false}));

// method overide setup
var methodOverride = require("method-Override");
//tell app which overide method to use
app.use(methodOverride("method"));


app.listen("3000");
