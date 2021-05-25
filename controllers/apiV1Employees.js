const db = require('../config/db')
const Employee = require('../models/Employee');

//GET {{API}}/?sort_by=name&sort_direction=asc
module.exports.findOne = async (req, res, next) => {
    const { id } = req.params;

    const employee = await Employee.findByPk(id);
    if (!employee) return next();
    return res.status(200).json({ data: employee });
}

module.exports.findAll = async (req, res, next) => {
    let order = '';

    // robic walidacje tego
    if(req.query.sort_by && req.query.sort_direction) {
        order = [[req.query.sort_by, req.query.sort_direction]];
    }

    let employees = await Employee.findAll({
        order: order
    });

    if (!employees) {
        employees = await Employee.findAll
    }
    return res.status(200).json({ data: employees });
}

module.exports.create = async (req, res, next) => {
    const employee =  await new Employee({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password,
        phone_number: req.body.phone_number,
        hire_date: req.body.hire_date,
    }).save();

    if (!employee) return next();
    return res.status(200).json({ data: employee, message: 'Employee has been created successfully.' });
}

module.exports.delete = async (req, res, next) => {
    const { id } = req.params;

    const employee = await Employee.destroy({ where: { emp_id: id }});
    if (!employee) return next();
    return res.status(200).json({ data: id, message: 'Employee has been deleted successfully.' });
}


/*await User.destroy({
    where: {
      id: {
        [Op.in]: [id1, id2, id3],
      },
    },
  })*/