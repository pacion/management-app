const { Router } = require('express');

const jobsController  = require('../../controllers/apiV1Jobs');
const { catchAsync } = require('../../middlewares/errors');

const router = Router();

//get all
router.get('', catchAsync(jobsController.findAll));

//post
router.post('', catchAsync(jobsController.create));

//put
router.put('/:id', catchAsync(jobsController.update));

//delete
router.delete('/:id', catchAsync(jobsController.delete));

module.exports = router;