const { DataTypes } = require("sequelize")
const sequelize = require('../config/db')

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    user_id: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
        type: ['sa', 'a', 'e'],
    }
})

module.exports = User