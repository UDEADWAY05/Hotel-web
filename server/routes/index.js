const express = require('express')
const router = express.Router({ mergeParams: true })

router.use('/auth', require('./auth.routes'))
router.use('/hotel', require('./hotel.routes'))
router.use('/user', require('./user.routes'))
router.use('/img', require('./img.routes'))

module.exports = router