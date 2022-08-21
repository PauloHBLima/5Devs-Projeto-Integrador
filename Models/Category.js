module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
       
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
    
          name: {
            type: DataTypes.STRING(200),
            allowNull: false
          }
    
        }, {
            tableName: "categories",
            timestamps: true
        });

        return Category;
    }