const Detail = require('./Detail');
const Event = require('./Event');
const Member = require('./Member');
const MemberEvent = require('./MemberEvent');
const MemberMember = require('./MemberMember');
const Message = require('./Message');

Member.hasMany(Event, {
	foreignKey: 'author_id',
	onDelete: 'CASCADE',
});

Event.belongsTo(Member, {
	foreignKey: 'author_id'
});

Member.belongsToMany(Event, {
	through: {
		model: MemberEvent,
	},
	as: 'memberEvent',
});

Event.belongsToMany(Member, {
	through: {
		model: MemberEvent,
	},
	as: 'memberEvent'
});

Member.belongsToMany(Member, {
	through: {
		model: MemberMember,
	},
	as: 'memberMember'
});

Event.hasMany(Detail, {
	foreignKey: 'event_id',
	onDelete: 'CASCADE'
});

Detail.belongsTo(Event, {
	foreignKey: 'event_id',
});

Event.hasMany(Message, {
	foreignKey: 'event_id',
	onDelete: 'CASCADE'
});

Message.belongsTo(Event, {
	foreignKey: 'event_id'
})


