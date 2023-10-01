const VatEncuesta = require("../models/vatEncuesta.model")

const getVatEncuestas = async (req, res) => {
    const vatEncuestas = await VatEncuesta.findAll()
    res.render('admin/vat-encuestas', { 'encuestas': vatEncuestas })
}

const postVatEncuesta = async (req, res) => {
    const {title, internal, type_url, external} = req.body

    if (external !== "") {
        await VatEncuesta.create({
            title,
            url: external,
            type_url
        })
    } else {
        await VatEncuesta.create({
            title,
            url: internal,
            type_url
        })
    }
    res.redirect('/admin/vatEncuestas')
}

const putVatEncuestas = async (req, res) => {
    const {id} = req.params
    const {title, internal, external, type_url} = req.body 
    const encuesta = await VatEncuesta.findByPk(id)
    if (encuesta) {
        if (external !== "")  {
            await encuesta.update({
                title, 
                url: external, 
                type_url
            })
        } else {
            await encuesta.update({
                title,
                url: internal,
                type_url
            })
        }
        await encuesta.save()
    }
    res.redirect('/admin/vatEncuestas')
}

const deleteVatEncuesta = async (req, res) => {
    const {id} = req.params
    const encuesta = await VatEncuesta.findByPk(id)
    await encuesta.destroy()
    res.redirect('/admin/vatEncuestas')
}

module.exports = {getVatEncuestas, postVatEncuesta, deleteVatEncuesta, putVatEncuestas}