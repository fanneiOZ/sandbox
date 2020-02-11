'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable(
          'product_categories',
          {    
            id: {
              type: Sequelize.DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,        
            },
            code: {
              field: 'category_code',
              type: new Sequelize.DataTypes.STRING(20),
              allowNull: false,
              unique: true
            },
            label: {
              type: new Sequelize.DataTypes.STRING(50),
              allowNull: false      
            },
            createdAt: {
              field: 'created_at',
              type: Sequelize.DataTypes.DATE,
            },
            updatedAt: {
              field: 'updated_at',
              type: Sequelize.DataTypes.DATE,
            }
          },
          {transaction: t}
        ),
        queryInterface.addColumn(
          'products', 
          'category_id', 
          {
            type: new Sequelize.DataTypes.INTEGER,
            allowNull: true,
            references: {model: 'product_categories'}
          },
          {transaction: t}
        )
      ]);
    });
  },

  down: (queryInterface) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.dropTable('product_categories', {transaction: t}),
        queryInterface.dropColumn('products', 'category_id', {transaction: t})
      ]);
    });
  }
};
