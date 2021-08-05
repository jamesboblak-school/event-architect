const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const Event = require('./Event');

class Detail extends Model {};

Detail.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
		},

		time: {
			type: DataTypes.DATE,
			allowNull: false
		},

		content: {
			type: DataTypes.TEXT,
			allowNull: false
		},

		event_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Event,
				key: 'id'
			}
		}
	},
	{
		sequelize,
		timestamps: true,
		modelName: 'detail',
		freezeTableName: true,
		underscored: true
	}
);

module.exports = Detail;