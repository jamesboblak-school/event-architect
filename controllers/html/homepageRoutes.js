// associate the models in variables
const router = require('express').Router();
const {Event} = require('../../models');
// const {Event, Detail, Member, MemberEvent, MemberMember, Message} = require('../../models');


// ============PRIVATE API ROUTES============
// 1. find all private events
// The `/events` endpoint
router.get('/', async (req, res) => {
    console.log("Find all Private Events");
    try {
        const eventsData = await Event.findAll();

        const eventsPlain = eventsData.map((event) => event.get({
            plain: true
        }));

        //   handlebars to main.hbs
     res.status(200).render('homePage', {
            events: eventsPlain//, loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log("error:" + err)
        res.status(500).json(err);
    }
});
//   ============USER ROUTES============
// 1. View Public Events GET

// 3. Log in to my profile GET

//   ============MEMBER ROUTES============
// 1. Find one member by `id` value

// 2. View Profile GET

// 3. View Public Event GET
router.get('/event/:id', async (req, res) => {
    console.log("View Public Event");
        try {
        const eventData = await Event.findByPk(req.params.id);
        if (!eventData) {
            res.status(404).json({
                message: 'No Event with that ID found!'
            });
            return;
        }
        const eventPlain = await eventData.get({plain: true});
        res.status(200).render('eventPage', {
            data: eventPlain
        });
    } catch (err) {
        console.log("error: " + err);
        res.status(500).json(err);
    }
    });

// 4. View Private Event GET

router.post('/logout', (req, res) => {
    console.log(req.session.loggedIn);
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).redirect('/');
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;
