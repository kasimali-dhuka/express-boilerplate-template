const { __ } = require("../utils/lang.util")
const { handleExceptions } = require("../utils/reponse.util")

const invalidEndpoint = (req, res) => {
    return handleExceptions(res, 'INVALID_ENDPOINT')
}

const exceptionHandler = (error, req, res, next) => {
    return handleExceptions(
        res, 
        error.message || error, 
        error.statusCode || 500
    )
}

module.exports = {
    invalidEndpoint,
    exceptionHandler
}