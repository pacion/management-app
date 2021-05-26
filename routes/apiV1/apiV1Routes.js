const { Router } = require('express');
const employeesRoutes = require('./employeesRoutes');
const detailsRoutes = require('./detailsRoutes');

const router = Router();


router.use('/employees/:id/details', detailsRoutes);

router.use('/employees', employeesRoutes);



module.exports = router;