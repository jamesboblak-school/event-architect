// associate the models in variables
const router = require('express').Router();
const {Member} = require('../../models');

//   ============USER ROUTES============
// 2. Become a Member POST
router.post('/', async (req, res) => {

	if (!req.body) {
		res.status(400).end();
	}
	try {
		const member = await Member.create(req.body) 

		if (!member) {
			res.status(400).json({message: 'Something went wrong'});
		}
	
		console.log('Logged in')
		req.session.save(() => {
			console.log('save')
	 		req.session.loggedIn = true;
	 		req.session.username = member.username;
	 		req.session.userId = member.id;

			res.status(200).json({id: member.id});
		});

	} catch(err) {
		console.log(err)
		res.status(500).end();
	}
  // res.render('dashboard');
    
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