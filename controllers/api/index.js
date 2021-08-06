const router = require('express').Router();
// const router = require('../index.js');
const eventRoutes = require('./eventRoutes.js');
const memberRoutes = require('./memberRoutes.js');

router.use('/event', eventRoutes);
router.use('/member', memberRoutes);

module.exports = router;
