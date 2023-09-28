const router = require('express').Router()

router.get('/users', (req, res) => {
    res.render('admin/users.pug')
})

module.exports = router