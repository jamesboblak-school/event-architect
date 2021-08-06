const {Detail} = require('../models');

const details = [
	{
		time: '2021-06-12 06:06:30',
		content: 'Check-in to hotel',
		event_id: 1
	},
	{
		time: '2021-06-14 012:00:20',
		content: 'Get rental car',
		event_id: 1
	}

];

const seedDetails = () => Detail.bulkCreate(details);

module.exports = seedDetails;