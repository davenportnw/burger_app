const express = require('expresss');
const router = express.Router();

const burgers = require('../models/burgers');
const connection = require('../config/connection');

// Create all our routes and set up logic within those routes where required.

router.get("/", function (req, res) {
    burgers.all(function(data) {
        let hbsObject = {
            hamburguesa: data
        };
        console.log("hbsObject", hbsObject);
        res.render('index', hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burgers.insert(["name", "come"], [req.body.name, req.body.come], function(result) {
        res.json( id, result.insertId);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

    burgers.update(
        {
            come: req.body.come
        },
        condition,
        function(result) {
            if(result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});


module.exports = router;

