const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.cookies.token

    if(!token) return res.status(401).redirect('/login')

    try {
        const verified = jwt.verify(token, "asfsafasd")
        req.user = verified
        next()
    } catch (e) {
        res.status(401).redirect('/login')
    }
}

module.exports = auth