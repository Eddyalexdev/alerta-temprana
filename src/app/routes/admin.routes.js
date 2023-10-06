const upload = require('../config/multer')
const { getForms, postForm, deleteForm, putForm } = require('../controller/formularios.controller')
const { postKiosko, deleteKiosko, putKiosko } = require('../controller/kioskos.controller')
const { getMedia, postMedia, putMedia, deleteMedia } = require('../controller/media.controller')
const { postUser, getUsers, putUser, deleteUser } = require('../controller/user.controller')
const { getVatEncuestas, postVatEncuesta, deleteVatEncuesta, putVatEncuestas } = require('../controller/vatEncuesta.controller')
const { getContact } = require('../controller/contact.controller')
const auth = require('../middleware/auth.middleware')
const Kiosko = require('../models/kiosko.model')
const router = require('express').Router()
const {allRoutes} = require('../data/urls')
const { getCorreo, postCorreo, putCorreo } = require('../controller/correo.controller')

// TODO: Administracion de usuarios
router.get('/users', auth, getUsers)
router.post('/users', auth, postUser)
router.post('/users/:id', auth, putUser)
router.get('/users/:id', auth, deleteUser)

// TODO: Administracion de Kioskos
router.get('/kioskos', auth, async (req, res) => {
    const kioskos = await Kiosko.findAll()
    res.render('admin/kioskos.pug', {'kioskos': kioskos, 'options': allRoutes})
})
router.post('/kioskos', auth, postKiosko)
router.get('/kioskos/:id', auth, deleteKiosko)
router.post('/kioskos/:id', auth, putKiosko)

// TODO: Imagenes o Videos
router.get('/media/pages', auth, getMedia)
router.post('/media/pages', auth, upload.single('file') , postMedia)
router.post('/media/pages/:id', auth, upload.single('file'), putMedia)
router.get('/media/pages/:id', auth, deleteMedia)

// TODO: Administracion de formularios
router.get('/formularios', auth, getForms)
router.post('/formularios', auth, postForm)
router.get('/formularios/:id', auth, deleteForm)
router.post('/formularios/:id', auth, putForm)

// TODO: Administracion de Encuestas
router.get('/vatEncuestas', auth, getVatEncuestas)
router.post('/vatEncuestas', auth, postVatEncuesta)
router.get('/vatEncuestas/:id', auth, deleteVatEncuesta)
router.post('/vatEncuestas/:id', auth, putVatEncuestas)

router.get('/contacto', getContact)

// TODO: Correos
router.get('/correo', getCorreo)
router.post('/correo', postCorreo)
router.post('/correo/:id', putCorreo)


module.exports = router