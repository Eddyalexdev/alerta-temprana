const { DataTypes } = require("sequelize")
const sequelize = require('../config/db')

const Correo = sequelize.define('Correo', {
    correo: DataTypes.STRING,
})

module.exports = Correo 