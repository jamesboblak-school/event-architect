const router = require('express').Router();
const dashboardRoutes = require('./dashboardRoutes');
const homepageRoutes = require('./homepageRoutes');
const authRoutes = require('./authRoutes');
const searchPageRoutes = require('./searchPageRoutes');
const eventPageRoutes = require('./eventPageRoutes');
const addEventPageRoutes = require('./addEventPageRoutes');

router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/auth', authRoutes);
router.use('/search', searchPageRoutes);
router.use('/event', eventPageRoutes);
router.use('/addEvent', addEventPageRoutes);

module.exports = router;