'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'products', 
            'active', 
            {
                type: Sequelize.DataTypes.BOOLEAN,
                defaultValue: true
            });
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn('products', 'active');
    }
};
