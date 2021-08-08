const {Member} = require('../models');


const members = [
	{
		username: 'cagedFaraday',
		password: '12345678',
		email: 'caged@yahoo.com'
	},
	{
		username: 'happyNoodle',
		password: '12345678',
		email: 'noodle@yahoo.com'
	},
	{
		username: 'uberMan',
		password: '12345678',
		email: 'man@yahoo.com'
	},
	{
		username: 'mikeEvans',
		password: '12345678',
		email: 'mike@fake.com'
	}
];

const seedMembers = () => Member.bulkCreate(members);

module.exports = seedMembers;