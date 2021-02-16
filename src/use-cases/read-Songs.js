const readSong = ({querys}) => {
    return async function select(info){
        let data = []
        const { id } = info 
        if (id) {
            const res = await querys.readOneData({id}) 
            if (res.rowCount > 0) {
                const items = res.rows 
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];
                    data.push({
                        id:e.id,
                        title:e.title,
                        composer:e.composer,
                    })
                } 
            }else{
             throw new Error(`Data is not available on this ID!!`)   
            }
        }else{
            const res1 = await querys.readAllData({})
            if (res1.rowCount > 0) {
                const items = res1.rows
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];
                    data.push({
                        id:e.id,
                        title:e.title,
                        composer:e.composer,
                    })
                }
            }else{
                throw new Error(`Empty Data Please Insert First!!`)  
               }
        }
        return data
    }
}

module.exports = readSong