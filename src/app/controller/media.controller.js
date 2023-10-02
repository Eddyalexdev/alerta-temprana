const Page = require("../models/page.model")

const getMedia = async (req, res) => {
    const pages = await Page.findAll()
    res.render("admin/media", { 'pages': pages })
}

const postMedia = async (req, res) => {
    const {title, slug} = req.body
    const {filename} = req.file
    await Page.create({
        title,
        slug,
        media: filename
    })

    res.redirect('/admin/media/pages')
}

const putMedia = async (req, res) => {
    const {id} = req.params
    const {title} = req.body
    const {filename} = req.file
    const media = await Page.findByPk(id)
    await media.update({
        title,
        media: filename
    })
    await media.save()

    const pages = await Page.findAll()
    res.render('admin/media', { 'pages': pages, 'message': 'imagen actualizada' })
}

const deleteMedia = async (req, res) => {
    const {id} = req.params
    const page = await Page.findByPk(id)
    if(page) {
        await page.update({
            media: ""
        })
        await page.save()
    }
    res.redirect('/admin/media/pages')
}

module.exports = {postMedia, getMedia, putMedia, deleteMedia}