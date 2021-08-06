const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class MemberEvent extends Model {};

MemberEvent.init(
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

		event_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'event',
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