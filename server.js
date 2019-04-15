// TODO: figure out what npm path is
// TODO: make html.routes and api.routes files
// TODO: create a friends.js as basically my database for the project
// TODO: Write to the friends list?
// TODO: create a modal popup to display user's match
// TODO: Delploy on Heroku, AWS, and Google Cloud
// TODO: Create a ReadMe


// Dependencies
// =============================================================
var express = require("express");
// var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.use('/',require('./app/routing/htmlRoutes'));
app.use('/api',require('./app/routing/apiRoutes'));

// Displays all characters


// Create New Characters - takes in JSON input


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
