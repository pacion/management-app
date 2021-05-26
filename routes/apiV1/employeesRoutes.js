const { Router } = require('express');

const employeesController  = require('../../controllers/apiV1Employees');
const { catchAsync } = require('../../middlewares/errors');

const router = Router();


//get /:id
router.get('/:id', catchAsync(employeesController.findOne));

//get all
router.get('', catchAsync(employeesController.findAll));

//post
router.post('', catchAsync(employeesController.create));

//put
//router.put('', catchAsync(employeesController.update));

//delete
router.delete('/:id', catchAsync(employeesController.delete));

module.exports = router;