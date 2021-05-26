const db = require('../config/db')
const Employee = require('../models/Employee');

const OrgsEmps = require('../models/OrgsEmps');
const Salary = require('../models/Salary');

module.exports.findOne = async (req, res, next) => {
    const { id } = req.params;

    const employee = await Employee.findByPk(id);
    if (!employee) return next();
    return res.status(200).json({ data: employee });
}

const validateSortParams = (column, direction) => {
    if(!direction) direction = 'asc';

    const lowerDirection = direction.toLowerCase();
    if(lowerDirection !== 'asc' && lowerDirection !== 'desc')  direction = 'asc';


    const columns = ["emp_id", "first_name", "last_name", "gender", "email", "password", "phone_number", "hire_date", "job_id", "title", "org_id", "name", "location", "salary"];
    if(!columns.includes(column) || !column) column = 'emp_id';

    return {
        column,
        direction
    };
}

module.exports.findAll = async (req, res) => {
    const { column, direction } = validateSortParams(req.query.sort_by, req.query.sort_direction);
    const order = [[column, direction]];
    
    let employees = await Employee.findAll({
        order: order
    });

    if (!employees) {
        employees = await Employee.findAll();
        
    }
    return res.status(200).json({ data: employees });
}

module.exports.create = async (req, res, next) => {
    await db.transaction(async t => {
        const employee =  await new Employee({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            email: req.body.email,
            password: req.body.password,
            phone_number: req.body.phone_number,
            hire_date: req.body.hire_date,
        }).save();
        const orgsEmps = await new OrgsEmps({
            org_id: null,
            emp_id: employee.emp_id
        }).save();
        const salary = await new Salary({
            emp_id: employee.emp_id,
            salary: null
        }).save();
        return res.status(200).json({ data: employee, message: 'Employee has been created successfully.' });
    });  
}

module.exports.delete = async (req, res, next) => {
    const { id } = req.params;

    await db.transaction(async t => {
        const employee = await Employee.destroy({ where: { emp_id: id }}, { transaction: t });
        const orgsEmps = await OrgsEmps.destroy({ where: { emp_id: id }}, { transaction: t });
        const salary = await Salary.destroy({ where: { emp_id: id }}, { transaction: t });
        return res.status(200).json({ data: id, message: 'Employee has been deleted successfully.' });
    });

}