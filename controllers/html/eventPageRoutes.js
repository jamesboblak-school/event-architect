const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Event, Message, Member } = require('../../models');
// dont delete :)
// GET render list of members search page upon loading url
router.get('/id', async (req, res) => {
    console.log("TROY",events)

    // res.render('searchPage')
    try {
        //get all users
        const eventData = await Event.findByBk(req.params.id, {
            include: [{
                model: Message
            }]

        });

        if (!eventData) {
            res.status(404).json({ message: 'Event Not Found!' });
            return;
        }

        // create object without extra data
        const event = eventData.get({ plain: true });
        // // if user logged in:
        // if (req.session.loggedIn) {
        //     //render member data to search page
             res.render('eventPage', { event });
        // }
        // //else redirect to log-in page
        // else res.redirect('login');

    } catch (err) {
        console.log("error:" + err)
        res.status(500).json(err);
    }

});

module.exports = router;