const router = require('express').Router()
const {login, logout} = require('../controller/auth.controller')
const Correo = require('../models/correo')
const Form = require('../models/form.model')
const Kiosko = require('../models/kiosko.model')
const Logo = require('../models/logo.model')
const Page = require('../models/page.model')
const VatEncuesta = require('../models/vatEncuesta.model')

router.get('/', async (req, res) => {
    const page = await Page.findOne({ where: { slug: 'home' }})
    const ext = page?.media.split('.').pop()
    const logo = await Logo.findOne({ where: { slug: 'home' }})

    res.render("init", { 'page': page, 'type': ext === undefined ? '' : ext === 'jpg' || ext === 'jpeg' || ext === 'gif' || ext === 'png' || ext === 'tif' || ext === 'bmp' ? 'image' : 'video', logo })
})

router.get('/kiosko', async (req, res) => {
    const kioskos = await Kiosko.findAll()
    const page = await Page.findOne({ where: { slug: 'kiosko' }}) 
    res.render("kiosko", { 'kioskos': kioskos, 'page': page})
})

router.get('/contacto', async (req, res) => {
    const page = await Page.findOne({ where: { slug: 'kiosko' } })
    res.render("contacto", { 'page': page })
})

router.get('/login', async (req, res) => {
    const token = req.cookies.token
    if(token) {
        res.redirect('/admin/users')
        return
    }
    const page = await Page.findOne({ where: { slug: 'login' }})
    const ext = page?.media.split('.').pop()
    res.render('login', { 'page': page,  'type': ext === undefined ? '' : ext === 'jpg' || ext === 'jpeg' || ext === 'gif' || ext === 'png' || ext === 'tif' || ext === 'bmp' ? 'image' : 'video' })
})

router.post('/login', login)

router.get('/logout', logout)

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

router.get('/vat', async (req, res) => {
    const correos = await Correo.findAll()
    const correo = correos[0]
    const logo = await Logo.findOne({ where: { slug: 'home' }})

    res.render('vat', {correo, logo, correos})
})

router.get('/vatEncuesta', async (req, res) => {
    const encuestas = await VatEncuesta.findAll()
    const logo = await Logo.findOne({ where: { slug: 'home' }})
    res.render('vatEncuesta', { 'encuestas': encuestas, logo })
})

router.get('/vatHerramientaCopy', async (req, res) => {
    const logo = await Logo.findOne({ where: { slug: 'home' }})
    res.render('vatHerramientaCopy', {logo})
})

router.get('/vatHerramienta', async (req, res) => {
    const logo = await Logo.findOne({ where: { slug: 'home' }})
    res.render('vatHerramienta', {logo})
})

router.get('/formularios', async (req, res) => {
    const forms = await Form.findAll()
    const logo = await Logo.findOne({ where: { slug: 'home' }})
    res.render('formularios', { 'forms': forms, logo })
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

router.get('/5001', async (req, res) => {
    const logo = await Logo.findOne({ where: { slug: 'home' }})
    res.render('5001', { logo })
})

router.get('/5002', async (req, res) => {
    const logo = await Logo.findOne({ where: { slug: 'home' }})
    res.render('5002', { logo })
})

router.get('/5003', async (req, res) => {
    const logo = await Logo.findOne({ where: { slug: 'home' }})
    res.render('5003', {logo})
})

router.get('/5004', async (req, res) => {
    const logo = await Logo.findOne({ where: { slug: 'home' }})
    res.render('5004', {logo})
})

router.get('/5005', async (req, res) => {
    const logo = await Logo.findOne({ where: { slug: 'home' }})
    res.render('5005', {logo})
})

router.get('/5006', async (req, res) => {
    const logo = await Logo.findOne({ where: { slug: 'home' }})
    res.render('5006', {logo})
})

router.get('/2do', async (req, res) => {
    const logo = await Logo.findOne({ where: { slug: 'home' }})
    res.render('2do', {logo})
})

module.exports = router