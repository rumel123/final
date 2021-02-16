const makeMusic = require('./makeMusic')
const patchMusic = require('./patchMusic')

const makeSong = makeMusic({})
const patchSong = patchMusic({})

const services = Object.freeze({
    makeSong,patchSong
})

module.exports = services
module.exports = { makeSong,patchSong }
