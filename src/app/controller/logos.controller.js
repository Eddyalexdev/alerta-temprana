const Logo = require("../models/logo.model")

const getLogos = async (req, res) => {
    const logos = await Logo.findAll()
    res.render('admin/logos', { logos })
}

const postLogos = async (req ,res) => {
    const {title, slug} = req.body
    const {filename} = req.file
    await Logo.create({
        title,
        slug,
        image: filename
    })

    res.redirect('/admin/media/logos')
}

const putLogos = async (req, res) => {
    const {id} = req.params
    const {title} = req.body
    const {filename} = req.file
    const logo = await Logo.findByPk(id)
    await logo.update({
        title,
        image: filename
    })
    await logo.save()

    res.redirect('/admin/media/logos')
}

const deleteLogo = async (req, res) => {
    const {id} = req.params
    const logo = await Logo.findByPk(id)
    if(logo) {
        await logo.update({
            image: ""
        })
        await logo.save()
    }
    res.redirect('/admin/media/logos')
}

module.exports = {getLogos, postLogos, putLogos, deleteLogo}