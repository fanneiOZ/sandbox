'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('products', 'listing_price', {
      type: Sequelize.DataTypes.JSONB,
      allowNull: false,
      defaultValue: { amount: 0, currency: 'THB' },
    });
  },

  down: queryInterface => {
    return queryInterface.dropColumn('products', 'listing_price');
  },
};
