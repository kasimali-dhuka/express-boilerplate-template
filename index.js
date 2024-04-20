require('dotenv').config()

const express = require('express')
const fileUpload = require('express-fileupload')
const session = require('express-session')
const path = require('path')
const cors = require('cors')
const { xss } = require('express-xss-sanitizer')
const { invalidEndpoint, exceptionHandler } = require('./src/middleware/error')
const routes = require('./src/routes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(process.cwd() + '/public'))
app.set('view engine', 'ejs');

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_KEY
}))

// File upload option
app.use(fileUpload())
// Senatizes all incoming requests
app.use(xss())
// Registering API and Admin routes
app.use(routes)
// Middleware to catch all invalid endpoints
app.use(invalidEndpoint)
// Error handler middleware
app.use(exceptionHandler)


app.listen(PORT, () => {
    console.log(`Server is listening at localhost:${PORT}`)
})