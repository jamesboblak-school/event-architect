const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('auth');
});

module.exports = router;