const { Router } = require('express');

const authController  = require('../../controllers/front/auth');
const { logout } = require('../../controllers/apiV1/apiV1Auth');


const router = Router();


router.get('/login', authController.login_get);
router.get('/logout', logout);
router.get('/register', authController.register_get);


module.exports = router;