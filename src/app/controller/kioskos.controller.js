const Kiosko = require('../models/kiosko.model')

const postKiosko = async (req, res) => {
    const {title, description, icon, url, external} = req.body

    if(title === "" || description === "" || icon === "") {
        res.redirect("/admin/kioskos")
    }

    const kiosko = await Kiosko.create({
        title,
        description,
        icon,
        url,
        external
    })

    res.redirect("/admin/kioskos")
}

const deleteKiosko = async (req, res) => {
    const {id} = req.params

    const kiosko = await Kiosko.findByPk(id)
    if(kiosko) {
        await kiosko.destroy()
    }
    res.redirect('/admin/kioskos')
}

const putKiosko  = async (req, res) => {
    const {id} = req.params
    const {title, description, icon, url, external} = req.body 
    const kiosko = await Kiosko.findByPk(id)
    if (kiosko) {
        await kiosko.update({
            title,
            description,
            icon,
            url,
            external
        })
        await kiosko.save()
    }
    res.redirect('/admin/kioskos')
}

module.exports = {postKiosko, deleteKiosko, putKiosko}