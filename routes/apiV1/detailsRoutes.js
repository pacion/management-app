const { Router } = require('express');

const detailsController  = require('../../controllers/apiV1Details');
const { catchAsync } = require('../../middlewares/errors');

const router = Router({ mergeParams: true });


//get /:id
//router.get('/:id', catchAsync(employeesController.findOne));

//get all
router.get('', catchAsync(detailsController.findFromAllTables));

//post
//router.post('', catchAsync(employeesController.create));

//put
//router.put('', catchAsync(employeesController.update));

//delete
//router.delete('/:id', catchAsync(employeesController.delete));

module.exports = router;