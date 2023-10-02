const Contact = require("../models/contact")

const getContact = async (req, res) => {
    const contacts = await Contact.findAll()
    res.render('admin/contacto', { 'contacts': contacts })
}

module.exports = {getContact}