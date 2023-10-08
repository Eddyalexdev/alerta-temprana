const multer = require('multer')
const {join, dirname} = require('path')
const {fileURLToPath} = require('url')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        cb(null, `${Date.now()}.${ext}`)
    }
})

const upload = multer({storage, limits: { fileSize: 100 * 1024 * 1024}})

module.exports = upload