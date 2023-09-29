const express = require('express')
const morgan = require('morgan')
const path = require('path')
const multer = require('multer')

const appRoutes = require('./app/routes/app.routes')
const adminRoutes = require('./app/routes/admin.routes')
const sequelize = require('./app/config/db')

sequelize.sync().then(() => console.log('db is ready'))

const app = express()

// Images Config
multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        cb(null, `${Date.now()}.${ext}`)
    }
})

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