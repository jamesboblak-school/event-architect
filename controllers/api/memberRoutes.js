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