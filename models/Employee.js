const Sequelize = require('sequelize');
const db = require('../config/db');

const Employee = db.define('employee', {
    emp_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM('F', 'M'),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true
        },
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(64),
        allowNull: false
    },
    phone_number: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    hire_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    job_id: {
        type: Sequelize.INTEGER
    }
})

module.exports = Employee;