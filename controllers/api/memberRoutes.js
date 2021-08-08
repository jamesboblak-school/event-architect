// associate the models in variables
const router = require('express').Router();
const {Member} = require('../../models');

//   ============USER ROUTES============
// 2. Become a Member POST
router.post('/', async (req, res) => {

    const memberData = await Member.findAll().catch((err) => {
        res.json(err);
    });

    const members = memberData.map((member) => member.get ({ plain: true }));
        res.render('dashboard', {members });
    
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