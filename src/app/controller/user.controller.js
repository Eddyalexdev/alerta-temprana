const User = require("../models/user.model")
const { hashPassword } = require("../utils/bcrypt")
const jsStringify = require('js-stringify')

const getUsers = async (req, res) => {
    const users = await User.findAll()
    const user_id = req.cookies.user_id

    if (!user_id) {
        res.render('admin/users', { 'users': users })
    }

    const user = await User.findByPk(user_id)
    res.render('admin/users', { jsStringify , 'users': users, user })
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

const putUser = async (req, res) => {
    const {id} = req.params
    const {name, surname, email, user_id, role} = req.body 
    const user = await User.findByPk(id)
    if (user) {
        await user.update({
            name,
            surname,
            email,
            user_id,
            role
        })
        await user.save()
    }
    res.redirect('/admin/users')
}

const deleteUser = async (req, res) => {
    const {id} = req.params
    const user = await User.findByPk(id)
    await user.destroy()
    res.redirect('/admin/users')
}

module.exports = {getUsers, postUser, deleteUser, putUser}

