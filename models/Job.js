'use strict';
const Sequelize = require('sequelize');
const db = require('../config/db');

const Job = db.define('job', {
    job_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Job;