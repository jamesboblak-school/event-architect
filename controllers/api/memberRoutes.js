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


//   ============USER ROUTES============
// 2. Become a Member POST
router.post('/', async (req, res) => {
    console.log("Become a Member");
    // res.json({
    //     message: "Become a Member"
    // });
    try {
        const memberData = await Member.create(req.body);
        // const eventPlain = await eventData.get({plain: true});
        res.status(200).json(memberData);

    } catch (err) {
        console.log("error: " + err);
        res.status(400).json(err);
    }
    });



// ============MEMBER DASHBOARD ROUTES============
// 12. Remove Contact DELETE
router.delete('/', (req, res) => {
    console.log("Remove Contact");
    res.json({
        message: "Remove Contact"
    });
});

// 13. Delete my profile DELETE
router.delete('/', (req, res) => {
    console.log("Delete my profile");
    res.json({
        message: "Delete my profile"
    });
});

module.exports = router;