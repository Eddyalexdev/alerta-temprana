const Correo = require("../models/correo")

const postCorreo = async (req, res) => {
    const {correo} = req.body
    await Correo.create({
        correo
    })
    res.redirect("/admin/correo")
}

const putCorreo = async (req, res) => {
    const {id} = req.params
    const {correo} = req.body
    const response = await Correo.findByPk(id)
    if(response) {
        await response.update({
            correo
        })
        response.save()
    }
    res.redirect("/admin/correo")
}

const getCorreo = async (req, res) => {
    const correos = await Correo.findAll()
    if(correos) {
        res.render('admin/correos', { correos })
        return
    }
    res.render('admin/correos')
}

module.exports = {postCorreo, putCorreo, getCorreo}