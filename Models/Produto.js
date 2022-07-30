module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto',{
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            allowNull:false,
            primaryKey: true
          },

        nome: {
          type: DataTypes.STRING(200),
          allowNull:false,
        },

        descricao: {
          type: DataTypes.INTEGER,
          allowNull:false,
        },

        imagem: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },

        preco: {
          type: DataTypes.STRING(50),
          allowNull:false,  
         },

         ativo: {
          type: DataTypes.INTEGER,
          allowNull:false,
         },
           
        },{
            tableName: 'books',
            timestamps: true,
        });
    return Produto;
}
        