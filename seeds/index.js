const seedMembers = require('./member-seeds');
const sequelize = require('../config/connection');
const seedEvents = require('./event-seeds');
const seedDetails = require('./detail-seeds');
const seedMemberEvents = require('./memberEvent-seeds');
const seedMemberMembers = require('./memberMember-seeds');

async function seedTables() {
	await sequelize.sync({force: true});

	await seedMembers();
	await seedEvents();
	await seedDetails();
	await seedMemberEvents();
	await seedMemberMembers();

};

seedTables();