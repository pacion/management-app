const { Router } = require('express');

const organizationsController  = require('../../controllers/apiV1/apiV1Organizations');
const { catchAsync } = require('../../middlewares/errors');

const router = Router();

//get all
router.get('', catchAsync(organizationsController.findAll));

//post
router.post('', catchAsync(organizationsController.create));

//put
router.put('/:id', catchAsync(organizationsController.update));

//delete
router.delete('/:id', catchAsync(organizationsController.delete));

module.exports = router;