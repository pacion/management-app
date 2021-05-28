const db = require('../config/db')

const Job = require('../models/Job');

module.exports.findAll = async (req, res, next) => {
    const jobs = await Job.findAll({attributes: { exclude: [ 'createdAt', 'updatedAt'] } });
    if (!jobs) return next();
    return res.status(200).json({ data: jobs });
}

module.exports.create = async (req, res, next) => {
    const job = await new Job({
        title: req.params.title
    }).save();
    if(!job) next();
    return res.status(200).json({ data: job, message: 'Job has been created successfully.' });
}

module.exports.update = async (req, res, next) => {
    const { id } = req.params;

    let job = await Job.findByPk(id);
    if (!job) return next();
        job.title = req.params.title
    return res.status(200).json({ message: 'Job has been updated successfully.' });
}

module.exports.delete = async (req, res, next) => {
    const { id } = req.params;
    const job = await Job.destroy({ where: { job_id: id }});
    return res.status(200).json({ data: id, message: 'Job has been deleted successfully.' });
}