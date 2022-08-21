module.exports = (sequelize, DataTypes) => {
    const Request = sequelize.define('Request', {
       
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },

          productId: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            foreignKey: true,
            field: 'product_id'
          }
    
        }, {
            tableName: "requests",
            timestamps: true
        })

        Request.associate = (models => {
            Request.belongsTo(models.Product, {
                foreignKey: 'productId',
                as: 'product'
            })
            })
       
        return Request;
    }