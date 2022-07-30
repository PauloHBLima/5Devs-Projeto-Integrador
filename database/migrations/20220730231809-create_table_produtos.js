'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
         await queryInterface.createTable('produtos', { 
          id: {
            type: Sequelize.DataTypes.INTEGER(10),
            autoIncrement: true,
            allowNull:false,  
            primaryKey: true
          },

          nome: {
            type: Sequelize.DataTypes.STRING(200),
            allowNull:false,
        },

          descricao: {
            type: Sequelize.DataTypes.STRING(400),
            allowNull:false,
        },

          imagem: {
          type: Sequelize.DataTypes.STRING(200),
          allowNull: false,
        },

          preco: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull:false,  
         },

          ativo: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull:false,
         },

         createdAt: Sequelize.DataTypes.DATE,
         updatedAt: Sequelize.DataTypes.DATE,

        });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
     
  }
};
