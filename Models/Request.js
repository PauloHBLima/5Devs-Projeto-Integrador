module.exports = (sequelize, DataTypes) => {
    const payment = sequelize.define('Request', {
       
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },

          product_id: {
            
          }
    
        }, {
            tableName: "Request",
            timestamps: true
        });
    }