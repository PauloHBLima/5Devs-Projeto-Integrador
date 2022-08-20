module.exports = (sequelize, DataTypes) => {
    const payment = sequelize.define('Payment', {
       
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          }
    
        }, {
            tableName: "Payments",
            timestamps: true
        });
    }