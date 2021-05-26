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

    },
    location: {
        type: Sequelize.STRING,

    }
});
Organization.removeAttribute('id');

module.exports = Organization;