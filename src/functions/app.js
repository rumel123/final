const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')


const encrypts = require('./encrypt')

const decrypts = require('./decrypt')


const encrypt = encrypts({jwt,dotenv})

const decrypt = decrypts({jwt,dotenv})

const services = Object.freeze({
    encrypt,
    decrypt
})

module.exports = services
module.exports = { encrypt,decrypt }