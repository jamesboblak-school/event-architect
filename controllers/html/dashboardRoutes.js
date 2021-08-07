// associate the models in variables
const router = require('express').Router();
const {
    Member,
    Message,
    Detail,
    Event,
    MemberEvent,
    MemberMember} = require('../../models');

// ============MEMBER DASHBOARD ROUTES============
// 2. View attending Public Events GET
router.get('/events', async (req, res) => {
    console.log("View attending Public Events");
    res.json({
        message: "view Public Events"
    });

});

// 3. View attending Private Events GET
router.get('/events', async (req, res) => {
    console.log("View attending Private Events");
    res.json({
        message: "view attending Private Events"
    });
});

// 10. View Contacts GET
router.get('/users', async (req, res) => {
    console.log("View Contacts");
    res.json({
        message: "view Contacts"
    });
});

// 1. View Dashboard GET
router.get('/:id', async (req, res) => {
    console.log("View Dashboard");
		if (!req.params.id) {
			res.status(400).json({message: 'Need member id'});
		}

		try{
			const member = await Member.findByPk(req.params.id)
			const createdEvents = await Event.findAll({
				where: {
						author_id: req.params.id
				}
			});
			const attendingEvents = await Event.findAll({
				include: [
					{
						model: Member, 
						as: 'author'
					},
					{
						model: Member,
						through: MemberEvent,
						as: 'memberevent'
					}]
			});

			const memberPlain = member.get({plain: true});
			const createdEventsPlain = createdEvents.map((event) => plainData(event));
			const attendingEventsPlain = attendingEvents.map((event) => plainData(event));
			
			console.log(memberPlain, createdEventsPlain, attendingEventsPlain)
			res.render('dashboard', {
				memberPlain, 
				createdEventsPlain, 
				attendingEventsPlain,
			  loggedIn: req.session.loggedIn,
			  id: req.session.userId
			});

		} catch(err) {
			console.log(err)
			res.status(500).json({message: 'Server error'});
		}
});

function plainData(data) {
	return data.get({plain: true});
}

module.exports = router;
