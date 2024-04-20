const express = require('express')
const apiRouter = require('./api.route')
const webRouter = require('./web.route')
const router = express.Router()

router.use('/api/v1', apiRouter)
router.use('/', webRouter)

module.exports = router