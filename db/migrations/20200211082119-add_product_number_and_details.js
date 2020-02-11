'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'products', 
          'product_number', 
          {
            type: new Sequelize.DataTypes.STRING(30),
            allowNull: false,
            defaultValue: 'dummy'            
          },
          {transaction: t}
        )
      ])
    });
  },

  down: (queryInterface) => {    
    return queryInterface.removeColumn('products', 'product_number');
  }
};
