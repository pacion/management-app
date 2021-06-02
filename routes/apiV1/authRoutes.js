const { Router } = require('express');

const authController  = require('../../controllers/apiV1/apiV1Auth');


const router = Router();


router.post('/login', authController.login);
router.get('/logout', authController.logout);


module.exports = router;