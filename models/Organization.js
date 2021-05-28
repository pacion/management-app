'use strict';
const Sequelize = require('sequelize');
const db = require('../config/db');

const Organization = db.define('organization', {
    org_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
    },
    location: {
        type: Sequelize.STRING,
    }
});
Organization.removeAttribute('id');

module.exports = Organization;