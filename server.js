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

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("blog_posts.db");

// giphy api sections
// begining of api search string before the search term
var apiStart = "http://api.giphy.com/v1/gifs/search?q=";
var apiEnd = "&api_key=dc6zaTOxFJmzC";

app.get("/", function(req, res){
	res.redirect("/posts");
});

// show all posts
app.get("/posts", function(req, res){
	// get posts from blog_post.db and send to index.ejs
	db.all("SELECT * FROM posts", function(err, data){
		if(err){
			console.log(err);
		}
		else{
			var posts = data;
			console.log(posts);
		}
		res.render("index.ejs", {posts: posts});
	});
});

// show individual posts(req.params.id - info from the url)
app.get("/posts/:id", function(req, res){
	
 db.get("SELECT * FROM posts WHERE id = ?", req.params.id, function(err, data){
		console.log(data);
		res.render("show.ejs", {post: data});
	});
});

// serve up a new page for creating a new post
app.get("/posts/new", function(req, res){
	res.render("new.ejs");
});

// Create post and post it to the post page
app.post("/posts", function(req, res){

})

app.listen("3000");
console.log("listening on port 3000");