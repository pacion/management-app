const db = require('../config/db');
const Employee = require('../models/Employee');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: maxAge
    });
}

module.exports.login = async (req, res) => {
    //const { email, password } = req.body;
    console.log('s');
    /*try {
        const {email, id} = await login(email, password);
        const token = createToken(id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000});
        res.status(200).json({ user: id});
    }
    catch (err) {
        res.status(400).json({ message: 'Given data is not correct.'});
    }*/
}

module.exports.logout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.cookie('isLogged', '', { maxAge: 1 });
    return res.redirect('/');
}

module.exports.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt();
    const passwd = await bcrypt.hash(password, salt);
    return passwd;
}

module.exports.changePassword = async (id, newPassword, next) => {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(newPassword, salt);

    let employee = await Employee.findByPk(id);
    if (!employee) next();
        employee.password = password;
    employee.save();
}

//logowanie
module.exports.login = async (email, password) => {
    const user = await Employee.findOne({ where: {email: email} });
    const id = user.emp_id;
    if(user) {
        const auth = await bcrypt.compare(password, user.password);
        if(auth) {
            return {
                user,
                id
            };
        }
        throw Error('Password or email is not correct.'); // haslo
    } 
    throw Error('Password or email is not correct.'); //mail
}