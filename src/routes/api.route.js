const express = require('express')
const { handleSuccess, handleExceptions } = require('../utils/reponse.util')
const apiRouter = express.Router()
const { SubscriptionPlan } = require('../models')

apiRouter.get('/sub', async (req, res, next) => {
    try {
        return handleSuccess(res, 'Hello', {})
    } catch (error) {
        return handleExceptions(res, error, 400)
    }
})

module.exports = apiRouter