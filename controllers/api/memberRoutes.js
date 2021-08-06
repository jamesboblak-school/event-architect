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
// } = require('../models');


//   ============USER ROUTES============
// 2. Become a Member POST
router.post('/', (req, res) => {
    console.log("Become a Member");
    res.json({
        message: "Become a Member"
    });
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