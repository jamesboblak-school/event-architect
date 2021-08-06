const router = require('express').Router();
const dashboardRoutes = require('./dashboardRoutes');
const homepageRoutes = require('./homepageRoutes');

router.use('/dashboard', dashboardRoutes);
router.use('/', homepageRoutes);

module.exports = router;