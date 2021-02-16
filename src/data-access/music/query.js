const query = ({models,connections}) => {
    return Object.freeze({
        createData,
        readOneData,
        readAllData,
        updateData,
        deleteData,
        checkUpdateForSameValue,
        
    })

    async function checkUpdateForSameValue({data}) {
        try {
             const pool = await connections()
            const { title, composer } = data
            const res = await new Promise((resolve)=> {
                pool.query(`SELECT * FROM "songs" where "title" = $1 AND "composer" = $2`,[title,composer],(err,res)=>{
                    if (err) resolve(err) 
                    resolve(res)
                })
            }) 
            return res
        } catch (error) {
          console.log(`Error: error on reading songs` , error.message)
        }
      }
      
    async function createData({data}) {
      try { 
          const Songs = models.songs
          const res = await Songs.create(data)  
          return res
      } catch (error) {
          console.log(`Error: error on creating songs` , error.message)
      }
    }
    
    async function readOneData({id}) {
        try {
            const pool = await connections()
            
            const res = await new Promise((resolve)=> {
                pool.query(`SELECT * FROM "songs" where "id" = $1`,[id],(err,res)=>{
                    if (err) resolve(err)
                    resolve(res)
                })
            })
            return res
        } catch (error) {
          console.log(`Error: error on reading songs` , error.message)
        }
      }
    
      async function readAllData({}) {
        try {
            const pool = await connections()
            const res = await new Promise((resolve)=> {
                pool.query(`SELECT * FROM "songs"`,(err,res)=>{
                    if (err) resolve(err)
                    resolve(res)
                }) 
            })
            return res
        } catch (error) {
          console.log(`Error: error on reading songs` , error.message)
        }
      }
      
      async function updateData({data}) {
        try {
            const { id,title,composer } =  data
            const Songs = await models.songs
            const res = await Songs.update({
                title:title,
                composer:composer
            },
            {
                where:{id:id},
            }
            ) 
            return res
        } catch (error) {
          console.log(`Error: error on updating songs` , error.message)
        }
      }

      async function deleteData({id}) {
        try { 
            const Songs = await models.songs
            const res = await Songs.destroy({where:{id,}})
            return res
        } catch (error) {
          console.log(`Error: error on deleting songs` , error.message)
        }
      }
}


module.exports = query