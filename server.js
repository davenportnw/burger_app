const express = require('express');
const app = express();
const mysql = require('mysql');
const exphbs = require('express-handlebars');
// const routes = require('./routes');
const connectDatabase = require('./config/connection');
// const routes = require('./routes')(app);

// HEROKU PORT
// var PORT = process.env.PORT || 8080;
const PORT = 3000;

//Parse request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Server static conent for the app from the "public" directory in the app directory
app.use(express.static(__dirname + 'public'));



//Connect Handlebars 
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import Routes
const routes = require("./controllers/burgerController");
app.use(routes);


app.listen(PORT, function() {
    console.log("Server running on port " + PORT );
});


