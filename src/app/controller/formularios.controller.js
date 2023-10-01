const Form = require("../models/form.model")

const getForms = async (req, res) => {
    const forms = await Form.findAll()
    res.render('admin/forms', { 'forms': forms })
}

const postForm = async (req, res) => {
    const {title, internal, type_url, external} = req.body

    if (external !== "") {
        await Form.create({
            title,
            url: external,
            type_url
        })
    } else {
        await Form.create({
            title,
            url: internal,
            type_url
        })
    }
    res.redirect('/admin/formularios')
}

const deleteForm = async (req, res) => {
    const {id} = req.params
    console.log(id)
    const form = await Form.findByPk(id)
    await form.destroy()
    res.redirect('/admin/formularios')
}

module.exports = {getForms, postForm, deleteForm}
