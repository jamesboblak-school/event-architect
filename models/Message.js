const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Message extends Model {};

Message.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},

		content: {
			type: DataTypes.STRING,
			allowNull: false
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
		timestamps: true,
		modelName: 'message',
		freezeTableName: true,
		underscored: true
	}
);

module.exports = Message;