const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Member } = require('../../models');
// dont delete :)
// GET render list of members search page upon loading url
router.get('/', async (req, res) => {

    // res.render('searchPage')
    try {
        //get all users
        const memData = await Member.findAll();

        // create object without extra data
        const members = memData.map((member) => member.get({ plain: true }));

        // // if user logged in:
        // if (req.session.loggedIn) {
        //     //render member data to search page
             res.render('searchPage', { members, loggedIn: req.session.loggedIn});
        // }
        // //else redirect to log-in page
        // else res.redirect('login');

    } catch (err) {
        console.log("error:" + err)
        res.status(500).json(err);
    }

});

module.exports = router;