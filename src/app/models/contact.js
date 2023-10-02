const { DataTypes } = require("sequelize")
const sequelize = require('../config/db')

const Contact = sequelize.define('Contact', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    icon: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    
})

module.exports = Contact