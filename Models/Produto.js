module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produtos',{
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
          type: DataTypes.STRING(400),
          allowNull:false,
        },

        imagem: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },

        preco: {
          type: DataTypes.INTEGER,
          allowNull:false,  
         },

         ativo: {
          type: DataTypes.INTEGER,
          allowNull:false,
         },
           
        },{
            tableName: 'produtos',
            timestamps: true,
        });
    return Produto;
}
        