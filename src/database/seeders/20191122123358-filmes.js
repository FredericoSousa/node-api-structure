'use strict';
const { Filme } = require('../../app/models');

module.exports = {
	up: (queryInterface, Sequelize) => {
		return Filme.bulkCreate([
			{
				titulo: 'Filme Teste',
				ano: '2000',
				diretor: 'Diretor Teste',
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	},
};
