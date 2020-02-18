'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: new Sequelize.DataTypes.STRING(150),
        unique: true,
        allowNull: false,
      },
      password: {
        type: new Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },
      name: {
        type: Sequelize.DataTypes.JSONB,
        allowNull: false,
      },
      thirdPartyProfile: {
        field: 'third_party_profile',
        type: Sequelize.DataTypes.JSONB,
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
