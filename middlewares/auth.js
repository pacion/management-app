const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const Job = require('../models/Job');
Job.hasOne(Employee, { foreignKey: 'job_id'});
Employee.belongsTo(Job, { foreignKey: 'job_id'});

module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    
    //token istnieje i jest poprawny
    if(token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken)=> {
            if (err) {
                return res.redirect('/login');
            }
            else {
                next();
            }
        })
    }
    else {
        return res.redirect('/login'); 
    }
}


//aktualny uzytkownik
module.exports.checkUser = async (req, res, next) => {
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken)=> {
            if (err) {
                console.log(err.message);
                res.locals.user = undefined; //null
                res.locals.job = undefined;
                res.locals.name = undefined;
                next();
            }
            else {
                const id = decodedToken.id;
                const user = await Employee.findOne({ where: { emp_id: id },  attributes: ['emp_id', 'first_name', 'last_name'], include: [ { model: Job, attributes: ['title'] } ] });
                res.locals.user = user.emp_id;

                res.locals.name = user.first_name + ' ' + user.last_name;

                const title = user.job.title.toLowerCase();
                res.locals.job = title;
                next();
            }
        })
    }
    else {
        res.locals.user = undefined;//null
        res.locals.job = undefined;
        res.locals.name = undefined;
        next();
    }
}
