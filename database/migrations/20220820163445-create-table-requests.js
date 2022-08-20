'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('requests', { 
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoincrement: true,
        allowNull: false, 
      },
      
      product_id: { 
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: {
            tableName: 'products'
          },
          key: 'id'
        },
        allowNull: false
      },
      payment_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: {
            tableName: 'products'
          },
          key: 'id'
        },
        allowNull: false
      }
    
    
    
    });
     
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.dropTable('requests');
     
  }
};