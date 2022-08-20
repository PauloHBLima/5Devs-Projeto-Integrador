'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('requests-products', { 
        id: {
          type: Sequelize.DataTypes.INTEGER(10),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        product_id: { 
          type: Sequelize.DataTypes.INTEGER(10),
          references: {
            model: {
              tableName: "products"
            },
            key:"id"
          },
          allowNull: false
        },
        request_id: {
          type: Sequelize.DataTypes.INTEGER(10),
          references: {
            model: {
              tableName: "requests"
            },
            key:"id"
          },
          allowNull: false

        }

    
    
    });
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('requests-products');
     
  }
};
