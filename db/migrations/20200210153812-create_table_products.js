'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new Sequelize.DataTypes.STRING(255),
        allowNull: false,
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
    return queryInterface.dropTable('products');
  },
};
