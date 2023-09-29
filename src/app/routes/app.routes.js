const router = require('express').Router()
const {login} = require('../controller/auth.controller')
const Kiosko = require('../models/kiosko.model')

router.get('/', (req, res) => {
    res.render("init")
})

router.get('/kiosko', async (req, res) => {
    const kioskos = await Kiosko.findAll()
    res.render("kiosko", { 'kioskos': kioskos })
})

router.get('/contacto', (req, res) => {
    res.render("contacto")
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', login)

router.get('/probando2', (req, res) => {
    res.render('probando2')
})

module.exports = router