const router = require('express').Router();
const withAuth = require('../../utils/auth');

// GET seached page
router.get('/', async (req, res) => {
    //if (req.session.loggedIn) {
        res.render('searchPage');
    //}
    //else res.redirect('login');

});

module.exports = router;