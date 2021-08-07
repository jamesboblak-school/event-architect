const Member = require('../../models/Member');
const bcrypt = require('bcrypt');

const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('auth', {
		loggedIn: req.session.loggedIn
	});
});

router.post('/', async (req, res) => {
	if (!req.body) {
		res.status(400).json({message: 'Request body needed'});
	}
	console.log(req.body)
	try {
		const member = await Member.findOne({
			where: {
				username: req.body.username
			}
		});

		if (!member) {
			res.status(404).json({message: 'Cannot find member'});
		}
		
		const isValidPass = await bcrypt.compare(req.body.password, member.password);

		if (isValidPass) {
			console.log('Logged in')
		}
	 	
		req.session.save(() => {
			console.log('save')
	 		req.session.loggedIn = true;
	 		req.session.username = member.username;
	 		req.session.userId = member.id;
	 
			console.log(req.session)
		 	res.status(200).json({
				 username: req.session.username,
				 userId: req.session.userId
			 })
		});


		 ;
	} catch(err) {
		console.log(err)
		res.status(500).json({message: 'Server Error'})
	}
})


module.exports = router;