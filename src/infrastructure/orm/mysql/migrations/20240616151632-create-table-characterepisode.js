module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('characterepisode', {

      id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
      },

      characterId: {
        type: Sequelize.INTEGER,
        references:{
            model: 'character',
            key: 'id'
        }
      },
      episodeId: {
        type: Sequelize.INTEGER,
        references:{
            model: 'episode',
            key: 'id'
        }
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