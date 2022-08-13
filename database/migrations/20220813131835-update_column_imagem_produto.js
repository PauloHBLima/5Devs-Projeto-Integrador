'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.changeColumn('produtos','imagem',  { type: Sequelize.DataTypes.TEXT,
      allowNull: false, });
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.changeColumn('produtos','imagem', {type: Sequelize.DataTypes.STRING(200),
      allowNull: false,});
    
  }
};
