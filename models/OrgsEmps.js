'use strict';
const Sequelize = require('sequelize');
const db = require('../config/db');

const OrgsEmps = db.define('OrgsEmps', {
    org_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    emp_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = OrgsEmps;