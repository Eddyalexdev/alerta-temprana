const { DataTypes } = require("sequelize")
const sequelize = require('../config/db')

const Form = sequelize.define('Form', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    type_url: DataTypes.STRING
})

module.exports = Form