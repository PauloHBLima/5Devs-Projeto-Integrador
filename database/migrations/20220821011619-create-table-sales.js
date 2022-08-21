'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', { 
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: { tableName: 'users'},
          key: 'id'
        },
        allowNull: false,
      },
    total:{
      type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
    },
      product_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: { tableName: 'requests'},
          key: 'id'
        },
        allowNull: false,
      }  
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
