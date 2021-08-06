const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Member extends Model {};


Member.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true	
		}, 

		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				min: 8
			},
			unique: true
		},

		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				min: 8
			}
		},

		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		}
	},
	{
		sequelize,
		freezeTableName: true,
		modelName: 'member'
	}
);

module.exports = Member;