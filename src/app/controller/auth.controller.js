const login = (req, res, next) => {
    const {user, password} = req.body

    if(user === "" || password === "") {
        res.redirect(301, '/login')
    }

    if(user !== "usuario" || password !== "1234") { 
        res.redirect(301, '/login')
    }

    res.redirect('/admin/users')
}

module.exports = {login}