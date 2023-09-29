const { postKiosko } = require('../controller/kioskos.controller')
const { postUser, getUsers } = require('../controller/user.controller')
const Kiosko = require('../models/kiosko.model')
const User = require('../models/user.model')

const router = require('express').Router()

router.get('/users', getUsers)

router.post('/users', postUser)

router.get('/kioskos', async (req, res) => {
    const kioskos = await Kiosko.findAll()
    res.render('admin/kioskos.pug', {'kioskos': kioskos})
})

router.post('/kioskos', postKiosko)

module.exports = router