const { Router } = require('express');

const employeesController  = require('../../controllers/apiV1Employees');
const { catchAsync } = require('../middlewares/errors');

const router = Router();


//get /:id
router.get('/:id', (req, res) => {
    //const { id } = req.params;
    res.send('get single');
 });

//get all
router.get('', catchAsync(employeesController.findAll));

//post
router.post('', (req, res) => {
    res.send('post');
});

//put
router.put('', (req, res) => {
    res.send('put');
});

//delete
router.delete('', (req, res) => {
    res.send('del');
});

module.exports = router;