const { Router } = require('express');
const apiV1 = require('./apiV1/apiV1Routes.js');

const router = Router();

router.use('/v1', apiV1);

module.exports = router;