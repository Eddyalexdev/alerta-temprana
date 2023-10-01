const { DataTypes } = require("sequelize")
const sequelize = require('../config/db')

const VatEncuesta = sequelize.define('VatEncuesta', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    type_url: DataTypes.STRING
})

module.exports = VatEncuesta