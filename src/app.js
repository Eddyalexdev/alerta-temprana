const express = require('express')
const morgan = require('morgan')
const path = require('path')

const appRoutes = require('./app/routes/app.routes')
const adminRoutes = require('./app/routes/admin.routes')

const app = express()

app.set("views", "./src/public/views")
app.set("view engine", "pug")

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "public")))

app.use('/', appRoutes)
app.use('/admin', adminRoutes)

module.exports = app