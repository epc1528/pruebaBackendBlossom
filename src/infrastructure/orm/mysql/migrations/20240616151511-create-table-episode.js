module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('episode', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      air_date: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      episode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      }
  })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};