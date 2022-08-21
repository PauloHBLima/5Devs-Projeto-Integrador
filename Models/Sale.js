module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          userId: {
            type: DataTypes.INTEGER(10),
            foreignKey: true,
            allowNull: false,
            field: 'user_id'
          },
          total: {
            type: DataTypes.STRING(500),
            allowNull: false
          
          },
          productId: {
            type: DataTypes.INTEGER(10),
            foreignKey: true,
            allowNull: false,
            field: 'product_id'
          }  
    },
    {
        tableName: 'sales',
        timestamps: false
    })

   Sale.associate = (models => {
     Sale.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product'
      })

     
       Sale.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
    })

    return Sale
}