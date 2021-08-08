const router = require('express').Router();
// const router = require('../index.js');
const eventRoutes = require('./eventRoutes.js');
const memberRoutes = require('./memberRoutes.js');
const searchRoutes = require('./searchRoutes.js');
const detailRoutes = require('./detailRoutes.js');

router.use('/event', eventRoutes);
router.use('/member', memberRoutes);
router.use('/search', searchRoutes);
router.use('/detail', detailRoutes);

module.exports = router;
