const User = require("../models/user.model")
const {} = require('bcrypt')
const { hashPassword } = require("../utils/bcrypt")

const getUsers = async (req, res) => {
    const users = await User.findAll()
    res.render('admin/users', { 'users': users })
}

const postUser = async (req, res) => {
    const {name, surname, user_id, email, password, role} = req.body

    const hash = await hashPassword(password)

    await User.create({
        name,
        surname,
        user_id,
        email,
        password: hash,
        role
    })

    res.redirect('/admin/users')
}

module.exports = {getUsers, postUser}

