const User = require("../models/user.model")

const getUsers = async (req, res) => {
    const users = await User.findAll()
    res.render('admin/users', { 'users': users })
}

const postUser = async (req, res) => {
    const {name, surname, user_id, email, password, role} = req.body

    const user = await User.create({
        name,
        surname,
        user_id,
        email,
        password,
        role
    })

    res.redirect('/admin/users', {'message': "Usuario creado con exito"})
}

module.exports = {getUsers, postUser}

