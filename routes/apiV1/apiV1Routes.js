const { Router } = require('express');
const employeesRoutes = require('./employeesRoutes');

const router = Router();

router.use('/employees', employeesRoutes);



module.exports = router;