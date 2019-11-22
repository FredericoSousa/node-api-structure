require('dotenv/config');

module.exports = {
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	schema: process.env.DB_SCHEMA,
	dialect: process.env.DB_DIALECT,
	logging: false,
};
