'use strict';
const Sequelize = require('sequelize');
const db = require('../config/db');

const Organization = db.define('Organization', {
    org_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Organization;