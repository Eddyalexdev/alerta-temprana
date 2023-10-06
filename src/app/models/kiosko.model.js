const { DataTypes } = require("sequelize")
const sequelize = require('../config/db')

const Kiosko = sequelize.define('Kiosko', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    icon: DataTypes.STRING,
    url: DataTypes.STRING,
    color: DataTypes.STRING,
    external: DataTypes.STRING
})

module.exports = Kiosko