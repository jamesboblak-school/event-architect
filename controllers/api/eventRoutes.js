// associate the models in variables
const router = require('express').Router();
const {
    Event
} = require('../../models');
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
// The `/events` endpoint

// router.post('/', (req, res) => {
//     console.log("Create Public Event");
//     res.json({
//         message: "Create Public Event"
//     });
// try {
//     const eventData = await Event.create({
//         event_title: req.body.event_title
//     });
//     const eventPlain = eventData.map((event) => event.get({
//         plain: true
//     }));
//     res.status(200).render('main', {
//         data: eventPlain
//     });
// } catch (err) {
//     res.status(400).json(err);
// }
// });

// 6. Create a Private Event POST
// router.post('/', async (req, res) => {
//     console.log("Create a Private Event");
//     res.json({
//         message: "Create a Private Event"
//     });
// });

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
console.log("Update a Public Event");
res.json({
    message: "Update a Public Event"
});


try {
    const eventData = await Event.update(req.body);
        // const eventPlain = await eventData.get({plain: true});
        res.status(200).json(eventData);

    if (!eventData) {
        res.status(404).json({
            message: 'No Event with that ID found!'
        });
        return;
    }
    res.status(200).render(`dashboard/${userId}`); //CHECK !!!!!!!!!!!!
} catch (err) {
    res.status(500).json(err);
}
});



// // 10. Update my Private Event PUT
// router.put('/', async (req, res) => {
//     console.log("Join a Private Event");
//     res.json({
//         message: "Join a Private Event"
//     });
// });

// 11. Delete a Public Event by its `id` value DELETE
// The `/events` endpoint
router.delete('/:id', async (req, res) => {
    console.log("Delete a Public Event");
    // res.json({
    //     message: "Delete a Public Event"
    // });
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
            data: eventData
        });
    } catch (err) {
        console.log("error: " + err);
        res.status(500).json(err);
    }
});

// 12. Delete my Private Event by its `id` value
// The `/events` endpoint
router.delete('/:id', async (req, res) => {
    console.log("Delete a Private Event");
    res.json({
        message: "Delete a Private Event"
    });
    // try {
    //     const eventData = await Event.destroy({
    //         where: {
    //             id: req.params.id,
    //             //   private: true,     !!!!!!!!!!! CHECK
    //         },
    //     });
    //     if (!eventData) {
    //         res.status(404).json({
    //             message: 'No Event with that ID found!'
    //         });
    //         return;
    //     }
    //     const eventPlain = eventData.map((event) => event.get({
    //         plain: true
    //     }));
    //     res.status(200).render('main', {
    //         data: eventPlain
    //     });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

// ============MEMBER DASHBOARD ROUTES============
// 4. Create Public Event POST
router.post('/:id', (req, res) => {
    console.log("Create Public Event");
    res.json({
        message: "Create Public Event"
    });
});

// 5. Create Private Event POST
router.post('/:id', (req, res) => {
    console.log("Create Private Event");
    res.json({
        message: "Create Private Event"
    });
});

// 6. Update my Public Event PUT
router.put('/:id', (req, res) => {
    console.log("Update my Public Event");
    res.json({
        message: "Update my Public Event"
    });
});


// 7. Update my Private Event PUT
router.put('/:id', (req, res) => {
    console.log("Update my Private Event");
    res.json({
        message: "Update my Private Event"
    });
});
// 8. Delete a Private Event DELETE
// The `/events` endpoint
router.delete('/:id', async (req, res) => {
    console.log("Delete a Private Event by ID");
    res.json({
        message: "Delete a Private Event by ID"
    });
    // try {
    //     const eventData = await Event.destroy({
    //         where: {
    //             id: req.params.id,
    //             //   private: true,     !!!!!!!!!!! CHECK
    //         },
    //     });
    //     if (!eventData) {
    //         res.status(404).json({
    //             message: 'No Event with that ID found!'
    //         });
    //         return;
    //     }
    //     const eventPlain = eventData.map((event) => event.get({
    //         plain: true
    //     }));
    //     res.status(200).render('main', {
    //         data: eventPlain
    //     });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

// 9. Delete my Public Event DELETE
// The `/events` endpoint
router.delete('/:id', async (req, res) => {
    console.log("Delete a Public Event");
    res.json({
        message: "Delete a Public Event"
    });
    // try {
    //     const eventData = await Event.destroy({
    //         where: {
    //             id: req.params.id,
    //             // private: false,     !!!!!!!!!!
    //         },
    //     });
    //     if (!eventData) {
    //         res.status(404).json({
    //             message: 'No Event with that ID found!'
    //         });
    //         return;
    //     }
    //     const eventPlain = eventData.map((event) => event.get({
    //         plain: true
    //     }));
    //     res.status(200).render('main', {
    //         data: eventPlain
    //     });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

// 11. Add Contact to an Event PUT
router.put('/:id', async (req, res) => {
    console.log("Add a Contact to an Event");
    res.json({
        message: "Add a Contact to an Event"
    });
});

// 2. Update info by event `id` value
// The `/events` endpoint

router.put('/:id', async (req, res) => {
    console.log("Update Event by :id");
    console.log(req.params.id);
    res.json({
        message: "Update Event by :id"
    });
    // try {
    //     const eventData = await Event.update({
    //         event_title: req.body.event_title,
    //     }, {
    //         where: {
    //             id: req.params.id
    //         }
    //     });

    //     const eventPlain = eventData.map((event) => event.get({
    //         plain: true
    //     }));

    //     if (!eventData) {
    //         res.status(404).json({
    //             message: 'No Event with that ID found!'
    //         });
    //         return;
    //     }
    //     res.status(200).render('main', {
    //         data: eventPlain
    //     });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});
module.exports = router;
