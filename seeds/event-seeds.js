const {Event} = require('../models');

const events = [
	{
		title: 'Rave',
		description: 'This is a cool rave',
		isPrivate: true,
		author_id: 4
	},
	{
		title: 'Rave2',
		description: 'This is a cooler rave',
		isPrivate: true,
		author_id: 1
	},
	{
		title: 'beach',
		description: 'A relaxing day by the beach',
		isPrivate: true,
		author_id: 4
	},
	{
		title: 'picnic',
		description: 'bring a friend',
		isPrivate: true,
		author_id: 1
	},
	{
		title: 'Party',
		description: 'A cool party at my place',
		isPrivate: true,
		author_id: 4
	},	{
		title: 'hike',
		description: 'Come check out the view and get in some cardio',
		isPrivate: true,
		author_id: 4
	},
	{
		title: 'dinner',
		description: 'trying out a new restaurant',
		isPrivate: true,
		author_id: 3
	},
	{
		title: 'barbeque',
		description: 'a little get together. byob',
		isPrivate: true,
		author_id: 3
	}
];

const seedEvents = () => Event.bulkCreate(events);

module.exports = seedEvents;