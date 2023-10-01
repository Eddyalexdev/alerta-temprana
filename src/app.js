const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')

const appRoutes = require('./app/routes/app.routes')
const adminRoutes = require('./app/routes/admin.routes')
const sequelize = require('./app/config/db')

sequelize.sync().then(() => console.log('db is ready'))

const app = express()

app.set("views", "./src/public/views")
app.set("view engine", "pug")

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "public")))

app.use('/public', express.static('./uploads'))
app.use('/', appRoutes)
app.use('/admin', adminRoutes)

module.exports = app