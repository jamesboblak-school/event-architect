const router = require('express').Router();
const dashboardRoutes = require('./dashboardRoutes');
const homepageRoutes = require('./homepageRoutes');
const authRoutes = require('./authRoutes');
const searchPageRoutes = require('./searchPageRoutes');
const eventPageRoutes = require('./eventPageRoutes');

router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/auth', authRoutes);
router.use('/search', searchPageRoutes);
router.use('/event', eventPageRoutes);

module.exports = router;