const {MemberEvent} = require('../models');

const memberEvents = [
	{
		member_id: 2,
		event_id: 1
	}
];

const seedMemberEvents = () => MemberEvent.bulkCreate(memberEvents);

module.exports = seedMemberEvents;