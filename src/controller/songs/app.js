const {addSongs,readSongs,updateSongs,deleteSongs} = require('../../use-cases/app')


const createDatas = require('./createSong')
const deleteDatas = require('./deleteSong')
const readDatas = require('./readSong')
const updateDatas = require('./updateSong')

const createData = createDatas({addSongs})
const deleteData = deleteDatas({deleteSongs})
const readData = readDatas({readSongs})
const updateData = updateDatas({updateSongs})


const services =  Object.freeze({
    createData,
    deleteData,
    readData,
    updateData
    })
 module.exports = services
 module.exports = {createData,  deleteData, readData, updateData}