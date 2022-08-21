module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(300),
            allowNull: false,
        },
        cep: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        addressNumber: {
            type: DataTypes.STRING(20),
            allowNull: true,
            field: 'address_number'
        },

        isAdmin: {
            type: DataTypes.TINYINT,
            allowNull: false,
            field: 'is_admin'
        }

    })

    return User
}