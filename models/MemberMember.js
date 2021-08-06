const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class MemberMember extends Model {};

MemberMember.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},

		member_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'member',
				key: 'id'
			}
		},

		following_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'member',
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

module.exports = MemberMember;