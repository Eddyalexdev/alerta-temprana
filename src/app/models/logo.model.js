const { DataTypes } = require("sequelize")
const sequelize = require('../config/db')

const Logo = sequelize.define('Logo', {
    image: DataTypes.STRING,
    slug: DataTypes.STRING,
    title: DataTypes.STRING
})

module.exports = Logo