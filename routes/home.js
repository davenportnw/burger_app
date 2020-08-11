// const express = require('express');
// const app = express();
// const exhbs = require('express-handlebars');


module.exports = function(app) {

    app.get('/', function(req,res) {
        res.render('main');
    })

}