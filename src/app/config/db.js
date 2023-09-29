const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('at', 'user', 'pass', {
    dialect: 'sqlite',
    host: './at.sqlite'
})

module.exports = sequelize