const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const  { encrypt,decrypt } = require('./functions/app')
dotenv.config()
const app = express() 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
 
const PORT = process.env.PORT || 4000
 
//here is where your put, just dont import the port. make it attached to your app.use
app.use('/music/', require('./routes/app'))


// here is where can you put your authorization Bearer
 app.get('/music/login',(req,res) => {
    const username = process.env.SECRET_KEY
    const encryptToks = encrypt(username)  
    res.json({token:encryptToks})
    }) 

const services = app.listen(PORT, () => 
console.log(`Now Listening to Port ${PORT}!!`))

module.exports = app