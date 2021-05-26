'use strict';
const Sequelize = require('sequelize');
const db = require('../config/db');

const Salary = db.define('salary', {
    emp_id: {
        type: Sequelize.INTEGER,

    },
    salary: {
        type: Sequelize.INTEGER
    }
});
Salary.removeAttribute('id');
module.exports = Salary;