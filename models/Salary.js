const Sequelize = require('sequelize');
const db = require('../config/db');

const Salary = db.define('salary', {
    emp_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    salary: {
        type: Sequelize.INTEGER
    }
});

module.exports = Salary;