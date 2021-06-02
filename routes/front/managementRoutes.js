const { Router } = require('express');

const managementController  = require('../../controllers/front/management');
const { catchAsync } = require('../../middlewares/errors');
const { requireAuth } = require('../../middlewares/auth');

const router = Router();


router.get('/me', requireAuth, catchAsync(managementController.findLoggedUser));


module.exports = router;