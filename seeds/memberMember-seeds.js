const router = require('../controllers/api/memberRoutes');
const {MemberMember} = require('../models');

const memberMembers = [
	{
		member_id: 3,
		following_id: 1
	},
	{
		member_id: 2, 
		following_id: 1
	}
];


const seedMemberMembers = () => MemberMember.bulkCreate(memberMembers);

module.exports = seedMemberMembers;
