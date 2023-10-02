const upload = require('../config/multer')
const { getForms, postForm, deleteForm } = require('../controller/formularios.controller')
const { postKiosko, deleteKiosko, putKiosko } = require('../controller/kioskos.controller')
const { getMedia, postMedia, putMedia } = require('../controller/media.controller')
const { postUser, getUsers, putUser, deleteUser } = require('../controller/user.controller')
const { getContact } = require('../controller/contact.controller')
const auth = require('../middleware/auth.middleware')
const Kiosko = require('../models/kiosko.model')
const router = require('express').Router()

// TODO: Administracion de usuarios
router.get('/users', auth, getUsers)
router.post('/users', auth, postUser)
router.post('/users/:id', auth, putUser)
router.get('/users/:id', auth, deleteUser)

// TODO: Administracion de Kioskos
router.get('/kioskos', auth, async (req, res) => {
    const kioskos = await Kiosko.findAll()
    res.render('admin/kioskos.pug', {'kioskos': kioskos})
})
router.post('/kioskos', auth, postKiosko)
router.get('/kioskos/:id', auth, deleteKiosko)
router.post('/kioskos/:id', auth, putKiosko)

// TODO: Imagenes o Videos
router.get('/media/pages', auth, getMedia)
router.post('/media/pages', auth, upload.single('file') , postMedia)
router.post('/media/pages/:id', auth, upload.single('file'), putMedia)

// TODO: Administracion de formularios
router.get('/formularios', getForms)
router.post('/formularios', postForm)
router.get('/formularios/:id', deleteForm)

router.get('/contacto', getContact)


module.exports = router