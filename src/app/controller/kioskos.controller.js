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

module.exports = {postKiosko}