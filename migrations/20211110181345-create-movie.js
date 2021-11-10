'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      },
      runtime: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      actors: {
        type: Sequelize.STRING
      },
      plot: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      box_office: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Movies');
  }
};