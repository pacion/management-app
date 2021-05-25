const Employee = require('../models/Employee');

module.exports.findOne = async (req, res) => {
    console.log('s')
}

module.exports.findAll = async (req, res) => {
    console.log('s')
    /*const employees = await Employee.findAll();
    if (!employees) return next();
    return res.status(200).send({ data: employees });*/
}