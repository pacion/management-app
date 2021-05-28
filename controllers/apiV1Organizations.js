const db = require('../config/db')

const Organization = require('../models/Organization');

module.exports.findAll = async (req, res, next) => {
    const organizations = await Organization.findAll({attributes: { exclude: [ 'createdAt', 'updatedAt'] } });
    if (!organizations) return next();
    return res.status(200).json({ data: organizations });
}

module.exports.create = async (req, res, next) => {
    const organization = await new Organization({
        title: req.params.title
    }).save();
    if(!organization) next();
    return res.status(200).json({ data: organization, message: 'Organization has been created successfully.' });
}

module.exports.update = async (req, res, next) => {
    const { id } = req.params;

    let organization = await Organization.findByPk(id);
    if (!organization) return next();
        organization.name = req.params.name;
        organization.location = req.params.location;
    return res.status(200).json({ message: 'Organization has been updated successfully.' });
}

module.exports.delete = async (req, res, next) => {
    const { id } = req.params;
    const organization = await Organization.destroy({ where: { org_id: id }});
    return res.status(200).json({ data: id, message: 'Organization has been deleted successfully.' });
}