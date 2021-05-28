const { Router } = require('express');

const detailsController  = require('../../controllers/apiV1Details');
const { catchAsync } = require('../../middlewares/errors');

const router = Router({ mergeParams: true });


//get user details
router.get('', catchAsync(detailsController.findFromAllTables));


module.exports = router;