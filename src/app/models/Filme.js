const { DataTypes, Model, Sequelize } = require('sequelize');
const { database } = require('../../config');
const sequelize = new Sequelize(database);

class Filme extends Model {}
Filme.init(
	{
		titulo: DataTypes.STRING,
		ano: DataTypes.STRING,
		diretor: DataTypes.STRING,
	},
	{ sequelize, modelName: 'Filme', timestamps: false }
);

module.exports = Filme;
