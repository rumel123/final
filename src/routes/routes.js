const {createData,  deleteData, readData, updateData} = require('../controller/songs/app')

const route = ({router,makeExpressCallback,middlewares,decrypt}) => {
    //get 
    router.get('/get/',middlewares,decrypt,makeExpressCallback(readData))
    router.get('/get/:id',middlewares,decrypt,makeExpressCallback(readData))
    //post
    router.post('/post/',middlewares,decrypt,makeExpressCallback(createData))
    //patch
    router.patch('/patch/:id',middlewares,decrypt,makeExpressCallback(updateData))
    //delete
    router.delete('/delete/:id',middlewares,decrypt,makeExpressCallback(deleteData))
    return router
}
module.exports = route