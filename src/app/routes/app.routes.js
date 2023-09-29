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

router.get('/probando3', (req, res) => {
    res.render('probando3')
})

router.get('/probando4', (req, res) => {
    res.render('probando4')
})

router.get('/probando5', (req, res) => {
    res.render('probando5')
})

router.get('/probando6', (req, res) => {
    res.render('probando6')
})

router.get('/probando7', (req, res) => {
    res.render('probando7')
})

router.get('/probando8', (req, res) => {
    res.render('probando8')
})

router.get('/probando9', (req, res) => {
    res.render('probando9')
})

router.get('/probando10', (req, res) => {
    res.render('probando10')
})

router.get('/probando11', (req, res) => {
    res.render('probando11')
})

router.get('/probando12', (req, res) => {
    res.render('probando12')
})

router.get('/probando13', (req, res) => {
    res.render('probando13')
})

router.get('/probando14', (req, res) => {
    res.render('probando14')
})

router.get('/probando15', (req, res) => {
    res.render('probando15')
})

router.get('/vat', (req, res) => {
    res.render('vat')
})

router.get('/vatEncuesta', (req, res) => {
    res.render('vatEncuesta')
})

router.get('/vatHerramientaCopy', (req, res) => {
    res.render('vatHerramientaCopy')
})

router.get('/vatHerramienta', (req, res) => {
    res.render('vatHerramienta')
})

router.get('/formularios', (req, res) => {
    res.render('formularios')
})

router.get('/google', (req, res) => {
    res.render('google')
})

router.get('/indexado', (req, res) => {
    res.render('indexado')
})

router.get('/login-asistencia', (req, res) => {
    res.render('login-asistencia')
})

router.get('/lista', (req, res) => {
    res.render('lista')
})

module.exports = router