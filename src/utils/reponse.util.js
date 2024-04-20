const { __ } = require("./lang.util")

/**
 * Function to handle success response for API
 * @param {res} res 
 * @param {string} message Response message
 * @param {object} data Response data
 * @returns Response
 */
const handleSuccess = (res, message, data={}) => {
    return res.status(200).json({
        status: true,
        message: __(message),
        data: data
    })
}


/**
 * Function to handle error response for API
 * @param {res} res 
 * @param {string} message Response message
 * @param {object} data Response data
 * @returns Response
 */
const handleErrors = (res, message, errors={}) => {
    return res.status(400).json({
        status: false,
        message: __(message),
        data: { errors }
    })
}


/**
 * Function to handle wrong response for API
 * @param {res} res 
 * @param {string} message Response message
 * @param {object} data Response data
 * @returns Response
 */
const handleWrong = (res, message, data={}) => {
    return res.status(401).json({
        status: false,
        message: __(message),
        data: data
    })
}


/**
 * Function to handle exception response for API
 * @param {res} res 
 * @param {string} message Response message
 * @param {object} data Response data
 * @returns Response
 */
const handleExceptions = (res, exp, code=400) => {
    return res.status(code).json({
        status: false,
        message: exp?.message || __(exp),
        data: {}
    })
}

module.exports = {
    handleSuccess,
    handleErrors,
    handleWrong,
    handleExceptions
}