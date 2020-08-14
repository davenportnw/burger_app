const express = require('express');
const router = express.Router();

const burgers = require('../models/burgers');
const connection = require('../config/connection');


router.get('/', function(req,res) {
    res.redirect('/burgers');
})
// Create all our routes and set up logic within those routes where required.

router.get("/burgers", function (req, res) {
    burgers.all(function(data) {
        let hbsObject = {
            hamburguesa: data
        };
        console.log("hbsObject", hbsObject);
        res.render('index', hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {
    burgers.create(req.body.name, function(result) {
        console.log("result", result);
        res.redirect("/burgers");
    });
});

router.put("/burgers/:id", function(req, res) {
    // const condition = "id = " + req.params.id;
    // console.log("condition", condition);
    // burgers.update(
    //     {
    //         come: req.body.come
    //     },
    //     condition,
    //     function(result) {
    //         if(result.changedRows === 0) {
    //             return res.status(404).end();
    //         }
    //         res.status(200).end();
    //     }
    // );
    burgers.update(req.params.id, function(result) {
        console.log('result', result);
        res.sendStatus(200);s
    })
});


module.exports = router;

