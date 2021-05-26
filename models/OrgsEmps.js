'use strict';
const Sequelize = require('sequelize');
const db = require('../config/db');

const OrgsEmps = db.define('orgsEmps', {
    org_id: {
        type: Sequelize.INTEGER,

    },
    emp_id: {
        type: Sequelize.INTEGER,

    }
});
OrgsEmps.removeAttribute('id');
module.exports = OrgsEmps;