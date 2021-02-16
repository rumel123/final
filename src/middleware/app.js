const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')


const middleware = require('./middleware')
const middlewares = middleware({jwt,dotenv})

const services = Object.freeze({
    middlewares
})

module.exports = services
module.exports = { middlewares }