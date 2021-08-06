// associate the models in variables
const router = require('express').Router();
const {Event, Detail, Member, MemberEvent, MemberMember, Message} = require('../../models');

// const {
//     Member,
//     Message,
//     Detail,
//     Event,
//     //   CHECK '_' in Member_event !!!!!!! CHECK
//     Member_event,
//     //   CHECK '_' in Member_member !!!!!!! CHECK
//     Member_member
// } = require('../models');

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
router.get('/events', async (req, res) => {
    console.log("View Public Events");
    res.json({
        message: "View Public Events"
    });
});

// 3. Log in to my profile GET
router.get('/users', async (req, res) => {
    console.log("Log into my Profile");
    res.json({
        message: "Log into my Profile"
    });
});

//   ============MEMBER ROUTES============

// 1. Find one member by `id` value
// The `/users` endpoint
router.get('/user/:id', async (req, res) => {
    console.log("Find One Member");
    res.json({
        message: "Find One Member"
    });
    // try {
    //     const userData = await User.findByPk(req.params.id, {
    //         include: [{
    //             model: User
    //         }],
    //     });
    //     if (!userData) {
    //         res.status(404).json({
    //             message: 'No Member with that ID found!'
    //         });
    //         return;
    //     }
    //     const userPlain = userData.map((user) => user.get({
    //         plain: true
    //     }));
    //     res.status(200).render('main', {
    //         data: userPlain
    //     });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

// 2. View Profile GET
router.get('/user/:id', (req, res) => {
    console.log("View Profile");
    res.json({
        message: "view Profile"
    });
});

// 3. View Public Event GET
router.get('/event/:id', (req, res) => {
    console.log("View Public Event");
    res.json({
        message: "View Public Event"
    });
});

// 4. View Private Event GET
router.get('/event/:id', (req, res) => {
    console.log("View Private Event");
    res.json({
        message: "View Private Event"
    });
});

module.exports = router;
