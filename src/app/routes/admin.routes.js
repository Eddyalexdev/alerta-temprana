const upload = require('../config/multer')
const { postKiosko } = require('../controller/kioskos.controller')
const { getMedia, postMedia, putMedia } = require('../controller/media.controller')
const { postUser, getUsers } = require('../controller/user.controller')
const auth = require('../middleware/auth.middleware')
const Kiosko = require('../models/kiosko.model')
const router = require('express').Router()

router.get('/users', auth, getUsers)
router.post('/users', auth, postUser)
router.get('/kioskos', auth, async (req, res) => {
    const kioskos = await Kiosko.findAll()
    res.render('admin/kioskos.pug', {'kioskos': kioskos})
})
router.post('/kioskos', auth, postKiosko)
router.get('/media/pages', auth, getMedia)
router.post('/media/pages', auth, upload.single('file') , postMedia)
router.post('/media/pages/:id', auth, upload.single('file'), putMedia)

module.exports = router