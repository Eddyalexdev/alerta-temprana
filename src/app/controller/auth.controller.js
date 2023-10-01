const jwt = require('jsonwebtoken') 
const { compare } = require("bcrypt")
const User = require("../models/user.model")

const login = async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({ where: { user_id: username }})

    if(user === null || user === undefined) {
        res.render('login', { 'message': "usuario no encontrado" })
        return
    }

    const isEquals = await compare(password, user.password)

    if (!isEquals) {
        res.render('login', { 'message': "password incorrecto"})
        return
    }

    const token = jwt.sign({user_id: user.user_id}, "asfsafasd")

    res.cookie('token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    })

    res.cookie('user_id', user.id)

    res.redirect('/admin/users')
}

const logout = (req, res) => {
    res.clearCookie('token')
    res.redirect('/login')
}

module.exports = {login, logout}