'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Filmes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			titulo: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			ano: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			diretor: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Filmes');
	},
};
