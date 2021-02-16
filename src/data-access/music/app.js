const models = require('../sequelize/models')
const { connections } = require('../app')

const query = require('./query')
const querys = query({models,connections})

module.exports = querys