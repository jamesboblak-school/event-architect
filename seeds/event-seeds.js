const {Event} = require('../models');

const events = [
	{
		title: 'Rave',
		description: 'This is a cool rave',
		isPrivate: true,
		author_id: 1
	},
	{
		title: 'Party',
		description: 'A cool party by the beach',
		isPrivate: true,
		author_id: 2
	}
];

const seedEvents = () => Event.bulkCreate(events);

module.exports = seedEvents;