const router = require('express').Router();
// const router = require('../index.js');
const eventRoutes = require('./eventRoutes.js');
const memberRoutes = require('./memberRoutes.js');
const searchRoutes = require('./searchRoutes.js');

router.use('/event', eventRoutes);
router.use('/member', memberRoutes);
router.use('/search', searchRoutes);

module.exports = router;
