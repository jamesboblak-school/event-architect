const {Message} = require('../models');

const messages = [
	{
		content: 'I think we should also get dinner the night before the rave',
		event_id: 1
	},
	{
		content: 'We should possibly take a walk around the city too',
		event_id: 1
	}
];

const seedMessages = () => Message.bulkCreate(messages);

module.exports = Message;