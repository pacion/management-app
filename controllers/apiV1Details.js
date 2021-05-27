const db = require('../config/db')
const Employee = require('../models/Employee');
const Job = require('../models/Job');
const Organization = require('../models/Organization');
const OrgsEmps = require('../models/OrgsEmps');
const Salary = require('../models/Salary');



/*Employee.hasOne(OrgsEmps, { foreignKey: 'emp_id'});
OrgsEmps.belongsTo(Employee, { foreignKey: 'emp_id'});

Job.hasOne(Employee, { foreignKey: 'job_id'});
Employee.belongsTo(Job, { foreignKey: 'job_id'});

Employee.hasOne(Salary, { foreignKey: 'emp_id'});
Salary.belongsTo(Employee, { foreignKey: 'emp_id' });*/


//OrgsEmps.hasMany(Organization, { foreignKey: 'org_id' }); //doesnt work
//Organization.belongsTo(OrgsEmps, { foreignKey: 'org_id' });

module.exports.findFromAllTables = async (req, res, next) => {
    const { id } = req.params;
    console.log(req.params);

    //const employees = await OrgsEmps.findAll({include: Organization});

    //const employees = await Employee.findAll({include: [Salary, Job, OrgsEmps]});
    res.json(employees);
}