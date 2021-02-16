 
const connection = ({pg,dotenv}) => {
    return async function conn(){
        const { Pool } = pg
        let config = null
        const env = process.env.NODE_ENV

        if(env == "development" || env == "production")
        {
            config = {
                user:process.env.USERNAME,
                password:process.env.PASSWORD,
                database:process.env.DB,
                port:process.env.PORT,
                host:process.env.HOST
            }
        }
        if(env == "test" )
        {
            config = {
                user:process.env.USERNAME,
                password:process.env.PASSWORD,
                database:process.env.DB,
                port:process.env.PORT,
                host:process.env.HOST
            }
        }
        pool = new Pool({config})
        return pool
    }
}

module.exports = connection