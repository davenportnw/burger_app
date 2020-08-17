// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm');

const burgers = {
    all: function(cb) {
        orm.all('hamburguesa', function(res){
            cb(res);
        });
    },

    create: function (name, cb) {
        orm.create('hamburguesa',["name", "come"], ['"' + name + '"',false], function(res) {
            cb(res);
        });
    },

    update: function (id, cb) {
        const condition = "id = " + id;
        orm.update(
            'hamburguesa', 
            {
                come: true,
            },
            condition,
            cb
            );
    }
};

// Export the database functions for the controller.
module.exports = burgers;
