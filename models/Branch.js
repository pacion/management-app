'use strict';
const Sequelize = require('sequelize');
const db = require('../config/db');

const Branch = db.define('branch', {
    org_id: {
        type: Sequelize.INTEGER,
    },
    emp_id: {
        type: Sequelize.INTEGER,
    }
});
Branch.removeAttribute('id');
module.exports = Branch;