const { DataTypes } = require("sequelize")
const sequelize = require('../config/db')

const Page = sequelize.define('Page', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    media: DataTypes.STRING
})

module.exports = Page