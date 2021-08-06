// associate the models in variables
const router = require('express').Router();
// const {
//     Member,
//     Message,
//     Detail,
//     Event,
//     //   CHECK '_' in Member_event !!!!!!! CHECK
//     Member_event,
//     //   CHECK '_' in Member_member !!!!!!! CHECK
//     Member_member
// } = require('../../../models');

// ============MEMBER DASHBOARD ROUTES============
// 1. View Dashboard GET
router.get('/:id', (req, res) => {
    console.log("View Dashboard");
    res.json({message: "view dashboard"});
});

// 2. View attending Public Events GET
router.get('/view-public-events', async (req, res) => {
    console.log("View attending Public Events");
    res.json({message: "view Public Events"});

});

// 3. View attending Private Events GET
router.get('/view-private-events', async (req, res) => {
    console.log("View attending Private Events");
    res.json({message: "view attending Private Events"});
});

// 10. View Contacts GET
router.get('/contacts', async (req, res) => {
    console.log("View Contacts");
    res.json({message: "view Contacts"});
});


module.exports = router;
