const db = require('../config/db')
const Employee = require('../models/Employee');
const Job = require('../models/Job');
const Organization = require('../models/Organization');
const OrgsEmps = require('../models/OrgsEmps');
const Salary = require('../models/Salary');

Employee.hasOne(Job, { foreignKey: 'job_id'});
Job.belongsTo(Employee, { foreignKey: 'job_id'});

/*Salary.hasOne(Employee, { foreignKey: 'emp_id'});
Employee.belongsTo(Salary);

OrgsEmps.hasMany(Organization, { foreignKey: 'org_id'});
OrgsEmps.belongsTo(OrgsEmps);

OrgsEmps.hasOne(Employee, { foreignKey: 'emp_id'});
Employee.belongsTo(OrgsEmps);*/

module.exports.findFromAllTables = async (req, res, next) => {
    const { id } = req.params;
    console.log(req.params);

    const employees = await Employee.findAll({where: {'emp_id': id}, include: Job});
    res.json(employees);
}