const express = require('express');
const mysql = require('mysql');
// HEROKU PORT
var PORT = process.env.PORT || 8080;
//Create db connection 

let connection =  mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "d0Lc3d23!",
    database: "hamburguesa_db"
    })
    
    connection.connect(function(err) {
        if(err) throw err;
        console.log("You are connected to your database!");
    })