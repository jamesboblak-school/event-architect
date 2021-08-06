const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const Member = require('./Member');
const Event = require('./Event');

class MemberEvent extends Model {};

MemberEvent.init(
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

		event_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Event,
				key: 'id'
			}
		}
	},
	{
		sequelize,
		modelName: 'memberEvent',
		freezeTableName: true,
		underscored: true
	}
);

module.exports = MemberEvent;