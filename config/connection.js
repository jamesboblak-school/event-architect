const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
		host: process.env.DB_HOST,
		dialect: 'mysql',
		port: process.env.DB_PORT
	});

module.exports = sequelize;