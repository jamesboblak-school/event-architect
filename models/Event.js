const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const Member = require('./Member');

class Event extends Model {};


Event.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},

		title: {
			type: DataTypes.STRING,
			allowNull: false
		},

		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},

		isPrivate: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		
		author_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Member,
				key: 'id'
			}
		}
	},
	{
		sequelize,
		timestamps: true,
		modelName: 'event',
		freezeTableName: true,
		underscored: true
	}
);

module.exports = Event;