// associate the models in variables
const router = require('express').Router();
const { Event } = require('../../models');
// const {Event, Detail, Member, MemberEvent, MemberMember, Message} = require('../../models');

// ============PRIVATE API ROUTES============

// 3. To create events
// The `/events` endpoint
router.post('/', async (req, res) => {
    console.log("Create event");
    // res.json({
    //     message: "Create event"
    // });
    try {
        const eventData = await Event.create(req.body);
        // const eventPlain = await eventData.get({plain: true});
        res.status(200).json(eventData);

    } catch (err) {
        console.log("error: " + err);
        res.status(400).json(err);
    }
});

// ============MEMBER ROUTES============

// 5. Create a Public Event POST

// 6. Create a Private Event POST

// 8. Join a Private Event PUT
router.put('/', async (req, res) => {
    console.log("Join a Private Event");
    // res.json({
    //     message: "Join a Private Event"
    // });
    // try {
    //     const 
    // }
});

// 9. Update my Public Event PUT
router.put('/:id', async (req, res) => {
    // get the user ID
console.log("Update a Public Event");
// res.json({
//     message: "Update a Public Event"


try {
    
    const eventData = await Event.update({ 
        ...req.body,
    });
        res.status(200).json(eventData);

    if (!eventData) {
        res.status(404).json({
            message: 'No Event with that ID found!'
        });
        return;
    }
    res.status(200).render(`dashboard/${req.session.userId}`,{
			loggedIn: req.session.loggedIn,
			id: req.session.userId
		}); //CHECK !!!!!!!!!!!!
} catch (err) {
    res.status(500).json(err);
};
});
// // 10. Update my Private Event PUT

// 11. Delete a Public Event by its `id` value DELETE
// The `/events` endpoint
router.delete('/:id', async (req, res) => {
    console.log("Delete a Public Event");
    res.json({
        message: "Delete a Public Event"
    });
    try {
        const eventData = await Event.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!eventData) {
            res.status(404).json({
                message: 'No Event with that ID found!'
            });
            return;
        }
        // const eventPlain = eventData.get({
        //     plain: true
        // });
        res.status(200).render('homePage', {
            data: eventData,
						loggedIn: req.session.loggedIn,
						id: req.session.userId
        });
    } catch (err) {
        console.log("error: " + err);
        res.status(500).json(err);
    }
});

// 12. Delete my Private Event by its `id` value

// ============MEMBER DASHBOARD ROUTES============
// 4. Create Public Event POST

// 5. Create Private Event POST

// 6. Update my Public Event PUT

// 7. Update my Private Event PUT

// 8. Delete a Private Event DELETE

// 9. Delete my Public Event DELETE

// 11. Add Contact to an Event PUT


// 2. Update info by event `id` value

module.exports = router;
