const router = require('express').Router();

router.get('/', (req, res) => {
	if (!req.session.loggedIn) {
		res.redirect('/auth');
	}
	res.render('addEventPage', {loggedIn: req.session.loggedIn, id: req.session.userId});
});

module.exports = router;