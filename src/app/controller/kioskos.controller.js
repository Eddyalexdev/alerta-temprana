const Kiosko = require('../models/kiosko.model')

const postKiosko = async (req, res) => {
    const {title, description, icon, urlExternal, urlInternal , external, color} = req.body

    if(title === "" || description === "" || icon === "") {
        res.redirect("/admin/kioskos")
    }

    if(urlExternal !== "") {
        await Kiosko.create({
            title,
            description,
            icon,
            color,
            url: urlExternal,
            external
        })
    } else {
        await Kiosko.create({
            title,
            description,
            icon,
            color,
            url: urlInternal,
            external
        })
    }

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
    const {title, description, icon, urlExternal, urlInternal, external, color} = req.body 
    const kiosko = await Kiosko.findByPk(id)
    if (kiosko) {
        if (urlExternal !== "") {
            await kiosko.update({
                title,
                description,
                icon,
                color,
                url: urlExternal,
                external
            })
        } else {
            await kiosko.update({
                title,
                description,
                icon,
                color,
                url: urlInternal,
                external
            })
        }
        await kiosko.save()
    }
    res.redirect('/admin/kioskos')
}

module.exports = {postKiosko, deleteKiosko, putKiosko}