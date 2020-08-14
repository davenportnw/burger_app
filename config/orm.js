const connection = require('./connection');
const { query } = require('express');

// Be able to push question marks as a string

function printQuestionMarks(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//Convert object key/value pairs to SQL syntax
function objToSql(ob) {
    let arr = []; 
    //loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
        let value = ob[key];
        
        //check to skip hidden properties
        if(Object.hasOwnProperty.call(ob,key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


//*Object for all our SQL Statments*//

const orm = {
//Grab all burgers
    all: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ';';
        //grab info from database
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        })
    },
//create entry
    create: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += `${vals.toString()}`;
        queryString += "); ";

        connection.query(queryString, vals, function( err, result) {
            if (err) throw err;
            cb(result);
        })
    },

//update entry
    update: function(table, objColVals, condition, cb) {
        let queryString = 'UPDATE' + table;

        queryString += 'SET';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },

//delete entry
    delete: function(table, condition, cb) {
        let queryString = 'DELETE FROM' + table;
        queryString += 'WHERE';
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
            if(err) throw err;
        })
        cb(result);
    }

}

module.exports = orm;