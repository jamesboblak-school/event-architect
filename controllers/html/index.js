const router = require('express').Router();
const dashboardRoutes = require('./dashboardRoutes');
const homepageRoutes = require('./homepageRoutes');
const authRoutes = require('./authRoutes');

router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/auth', authRoutes);

module.exports = router;