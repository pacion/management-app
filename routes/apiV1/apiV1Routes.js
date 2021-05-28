const { Router } = require('express');
const employeesRoutes = require('./employeesRoutes');
const detailsRoutes = require('./detailsRoutes');
const jobsRoutes = require('./jobsRoutes');
const organizationsRoutes = require('./organizationsRoutes');
const authRoutes = require('./authRoutes');

const router = Router();


router.use('/auth', authRoutes);

router.use('/employees/:id/details', detailsRoutes);

router.use('/employees', employeesRoutes);

router.use('/jobs', jobsRoutes);

router.use('/organizations', organizationsRoutes);

module.exports = router;