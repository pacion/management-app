const { Router } = require('express');
const authRoutes = require('./authRoutes');
const managementRoutes = require('./managementRoutes');

const router = Router();



router.use('', authRoutes);
router.use('',  managementRoutes);

router.get('/', (req, res) => {
    res.render('index.pug', {
        title: 'Home'
    })
})


module.exports = router;