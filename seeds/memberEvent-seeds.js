const {MemberEvent} = require('../models');

const memberEvents = [
	{	
		member_id: 1,//caged
		event_id: 1//rave
	},
	{
		member_id: 1,//caged
		event_id: 2//rave2
	},
	{
		member_id: 2,//happy
		event_id: 3//beach
	},
	{
		member_id: 1,//caged
		event_id: 4//picnic
	},
	{
		member_id: 2,//happy
		event_id: 5//party
	},
	{
		member_id: 2,//uber
		event_id: 6//hike
	},
	{
		member_id: 1,//uber
		event_id: 7//dinner
	},
	{
		member_id: 2,//uber
		event_id: 8//barbeque
	}
];

const seedMemberEvents = () => MemberEvent.bulkCreate(memberEvents);

module.exports = seedMemberEvents;