const {Event} = require('../models');

const events = [
	{
		title: 'Rave',
		description: 'This is a cool rave',
		isPrivate: false,
		author_id: 1
	}
];

const seedEvents = () => Event.bulkCreate(events);

module.exports = seedEvents;