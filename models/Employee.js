'use strict';
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
    },
    last_name: {
        type: Sequelize.STRING,
    },
    gender: {
        type: Sequelize.ENUM('F', 'M'),
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true
        },
    },
    password: {
        type: Sequelize.STRING,
    },
    phone_number: {
        type: Sequelize.STRING(15),
    },
    hire_date: {
        type: Sequelize.DATEONLY,
    },
    job_id: {
        type: Sequelize.INTEGER
    }
})

module.exports = Employee;