const router = require('express').Router();
const dashboardRoutes = require('./dashboardRoutes');
const homepageRoutes = require('./homepageRoutes');
const authRoutes = require('./authRoutes');
const searchPageRoutes = require('./searchPageRoutes');

router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/auth', authRoutes);
router.use('/search', searchPageRoutes);

module.exports = router;