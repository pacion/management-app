const db = require('../../config/db')
const Employee = require('../../models/Employee');
const Job = require('../../models/Job');
const Organization = require('../../models/Organization');
const Branch = require('../../models/Branch');
const Salary = require('../../models/Salary');



Employee.hasOne(Branch, { foreignKey: 'emp_id'});
Branch.belongsTo(Employee, { foreignKey: 'emp_id'});

Job.hasOne(Employee, { foreignKey: 'job_id'});
Employee.belongsTo(Job, { foreignKey: 'job_id'});

Employee.hasOne(Salary, { foreignKey: 'emp_id'});
Salary.belongsTo(Employee, { foreignKey: 'emp_id' });


Organization.hasMany(Branch, { foreignKey: 'org_id'});
Branch.belongsTo(Organization, { foreignKey: 'org_id'});


module.exports.findLoggedUser = async (req, res) => {
    const employee = await Employee.findAll({
        include: [
            {
                model: Job,
                attributes: { exclude: [ 'createdAt', 'updatedAt' ]}
            },
            {
                model: Salary,
                attributes: [['salary', 'value']]
            },
            {
                model: Branch,
                attributes:{ exclude: [ 'emp_id', 'createdAt', 'updatedAt' ]},
                include: [{
                    model: Organization,
                    attributes: { exclude: [ 'org_id', 'createdAt', 'updatedAt' ]}
                }]
            }
        ],
        where: { emp_id: res.locals.user },
        attributes:{ exclude: [ 'password', 'job_id', 'createdAt', 'updatedAt' ]}
    });
    console.log(employee[0])
    res.render('./management/me.pug', {
        title: 'Me',
        data: employee[0],
        name: res.locals.name
    });
}
