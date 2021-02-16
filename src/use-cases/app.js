const { makeSong,patchSong } = require('../entities/music/app')
const querys = require('../data-access/music/app')

const addSong = require('./create-Songs')
const readSong = require('./read-Songs')
const updateSong = require('./update-Songs')
const deleteSong = require('./delete-Songs')

const addSongs = addSong({makeSong,querys})
const readSongs = readSong({querys})
const updateSongs = updateSong({patchSong,querys})
const deleteSongs = deleteSong({querys})

const services =  Object.freeze({
addSongs,
readSongs,
updateSongs,
deleteSongs
})

module.exports = services
module.exports = {addSongs,readSongs,updateSongs,deleteSongs}