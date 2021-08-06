const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

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
		modelName: 'member',
		hooks: {
			beforeBulkCreate: async (loginData) => {
				for (const login of loginData) {
					login.username = login.username.toLowerCase();
					login.password = await bcrypt.hash(login.password, 10);
				}
			},
			beforeCreate: async (login) => {
				login.username = login.username.toLowerCase();
				login.password = await bcrypt.hash(login.password, 10);
			},
			beforeUpdate: async (login) => {
				login.username = login.username.toLowerCase();
				login.password = await bcrypt.hash(login.password, 10);
			}
		}
	}
);

module.exports = Member;