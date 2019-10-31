const express = require('express')
const router = express.Router()

const Auth = require('../controller/authController')

router.post('/register', Auth.register)
router.get('/login', Auth.login)
router.get('/logout', Auth.logout)
router.get('user', ...Auth.user)

module.exports = router
