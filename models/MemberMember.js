const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const Member = require('./Member');
const MemberEvent = require('./MemberEvent');

class MemberMember extends Model {};

MemberMember.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false
		},

		member_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Member,
				key: 'id'
			}
		},

		follower_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Member,
				key: 'id'
			}
		}
	},
	{
		sequelize,
		timestamps: true,
		modelName: 'memberMember',
		freezeTableName: true,
		underscored: true
	}
);

module.exports = MemberEvent;