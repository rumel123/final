const updateSong = ({patchSong,querys}) => {
    return async function put({id, ...info}) {
    let data = patchSong(id,info) 
      data = { 
  id:data.getID(),
  title:data.getT(),
  composer:data.getC(),
    }   
       

        const resReadDataExist = await querys.checkUpdateForSameValue({data})
        if (resReadDataExist.rowCount > 0) throw new Error(`Inputed Data is exist Please Try new.`)
        const resCheckData = await querys.readOneData({id:id.data})
        if (resCheckData == 0) throw new Error(`ID doesnt Exist, Please Choose From the records.`)
        const res = await querys.updateData({data}) 
        if (res[0] == 1){ message = `Update Successfully!`
        return message }
        throw new Error(`unable to update Data is exist or the id is Doesnt exist, please check it carefully`)
     
    }
}

module.exports = updateSong