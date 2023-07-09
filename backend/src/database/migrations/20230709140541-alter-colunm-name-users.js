'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('users', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('users', 'deletedAt', 'deleted_at');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('users', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('users', 'deletedAt', 'deleted_at');
  }
};
