'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username:'admin',
        password: 'admin'        
      },
      {
        username:'user1',
        password: 'user1'
      },
      {
        username:'user2',
        password: 'user2'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
