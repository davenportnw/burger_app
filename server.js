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


app.use(express.static(__dirname + 'public'));
app.use(express.json());


//Connect Handlebars 
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Routes

app.get('/', function(req,res) {
    res.render('index', {layout: false}, );
});




app.listen(PORT, function() {
    console.log("Server running on port " + PORT );
});


