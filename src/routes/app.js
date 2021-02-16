const express = require('express')
const router = express.Router()
const makeExpressCallback = require('../express-callback/app')
const {middlewares} = require('../middleware/app')
const { encrypt,decrypt } = require('../functions/app') 

const route = require('./routes')

const routes = route({router,makeExpressCallback,middlewares,decrypt})

const services = Object.freeze({
    routes
})

module.exports = services
module.exports = routes