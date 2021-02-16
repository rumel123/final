const deleteSong = ({querys}) => {
    return async function select(info) {
        const {id} = info 
        const resFind = await querys.readOneData({id}) 
        if (resFind.rowCount == 0 ) {throw new Error(`Data doesn't exist pleasse choose other id`)}
     
        const res = await querys.deleteData({id})
        let message = `Can't Delete Data. We have a Problem!!`
        if(res == 1) message = `Delete Successfully`
        return message
    }
}

module.exports = deleteSong