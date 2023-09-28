const router = require('express').Router()
const {login} = require('../controller/auth.controller')

router.get('/', (req, res) => {
    res.render("init")
})

router.get('/kiosko', (req, res) => {
    res.render("kiosko")
})

router.get('/contacto', (req, res) => {
    res.render("contacto")
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', login)

module.exports = router