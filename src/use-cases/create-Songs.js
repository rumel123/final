const addSong = ({makeSong,querys}) =>{
    return async function post(info) {
        let datas = await makeSong(info)
        
        let data = {
            title:datas.getT(),
            composer:datas.getC()
        } 
            const resRead = await querys.checkUpdateForSameValue({data}) 
            console.log
            if (resRead.rowCount > 0) throw new Error(`Song is Exist in same composer, please put a new Song`)   
           
            const res = await querys.createData({data}) 
            let message = `Song Does not save. We have A problem!!`
            if(res) message = `Song is Successfully Insert!!`        
            return message
                
           
    }
}

module.exports = addSong