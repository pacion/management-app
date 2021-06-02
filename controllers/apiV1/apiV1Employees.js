const db = require('../../config/db')
const Employee = require('../../models/Employee');

const Branch = require('../../models/Branch');
const Salary = require('../../models/Salary');
const { destroy } = require('../../models/Employee');

const { hashPassword } = require('./apiV1Auth');

module.exports.findOne = async (req, res, next) => {
    const { id } = req.params;

    let employee = await Employee.findByPk(id);
    if (!employee) return next();
    employee.password = undefined;
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
    let employees = '';
    
    employees = await Employee.findAll({
        order: order,
        attributes: { exclude: [ 'createdAt', 'updatedAt', 'password', 'job_id', 'phone_number', 'gender' ]}
    });

    if (!employees) {
        employees = await Employee.findAll({attributes: { exclude: [ 'createdAt', 'updatedAt', 'password', 'job_id', 'phone_number', 'gender' ]}});
    }
    return res.status(200).json({ data: employees });
}

module.exports.create = async (req, res) => {
    const password = await hashPassword(req.body.password);

    await db.transaction(async t => {
        const employee =  await new Employee({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            email: req.body.email,
            password: password,
            phone_number: req.body.phone_number,
            hire_date: req.body.hire_date,
            job_id: req.body.job_id
        }).save();
        const branch = await new Branch({
            org_id: null,
            emp_id: employee.emp_id
        }).save();
        const salary = await new Salary({
            emp_id: employee.emp_id,
            salary: null
        }).save();
        return res.status(200).json({ message: 'Employee has been created successfully.' });
    }); 
}

module.exports.update = async (req, res) => {
    const { id } = req.params;
    const password = await hashPassword(req.body.password);
    let employee = await Employee.findByPk(id);
    if (!employee) employee = '';
        employee.first_name = req.params.first_name;
        employee.last_name = req.params.last_name;
        employee.gender = req.params.gender;
        employee.password = password; 
        employee.email = req.params.email;
        employee.phone_number = req.params.phone_number;
        //employee.hire_date = req.params.hire_date;
        employee.job_id = req.params.job_id;
    employee.save();

    return res.status(200).json({ message: 'Employee has been updated successfully.' });
}

module.exports.delete = async (req, res, next) => {
    const { id } = req.params;

    await db.transaction(async t => {
        const employee = await Employee.destroy({ where: { emp_id: id }}, { transaction: t });
        const branch = await Branch.destroy({ where: { emp_id: id }}, { transaction: t });
        const salary = await Salary.destroy({ where: { emp_id: id }}, { transaction: t });
        return res.status(200).json({ data: id, message: 'Employee has been deleted successfully.' });
    });

}