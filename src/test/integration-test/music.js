require("dotenv").config();
const axios = require('axios'); 
const jwt = require('jsonwebtoken')
const  { encrypt,decrypt } = require('../../functions/app')
const url = `http://localhost:${process.env.PORT}`;

const username = process.env.SECRET_KEY
const encryptToks = encrypt(username)  

const routes = {
  readSongs: async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}/music/get/`,  
        headers: {
          Authorization: `Bearer ${encryptToks}`
       }
      })  
     
      return res
    } catch (e) {
      return e;
    }
    },
    readSongsID: async (id) => {
      try {
        const res = await axios({
          method: "GET",
          url: `${url}/music/get/${id}`,  
          headers: {
            Authorization: `Bearer ${encryptToks}`
         }
        })   
        return res
      } catch (e) {
        return e;
      }
      } ,
      addSongs: async ({info}) => {
        try {
          const res = await axios({
            method: "POST",
            url: `${url}/music/post/`,  
            data:{
              ...info
            },
            headers: {
              Authorization: `Bearer ${encryptToks}`
           }
          })    
          return res
        } catch (e) {
          return e;
        }
        },
        updateSongs: async ({id,info}) => {
          try {
            const res = await axios({
              method: "PATCH",
              url: `${url}/music/patch/${id}`,  
              data:{
                ...info
              },
              headers: {
                Authorization: `Bearer ${encryptToks}`
             }
            })     
            return res
          } catch (e) {
            return e;
          }
          },
        deleteSongs: async (id) => {
          try {
            const res = await axios({
              method: "DELETE",
              url: `${url}/music/delete/${id}`,  
              headers: {
                Authorization: `Bearer ${encryptToks}`
             } 
            })     
            return res
          } catch (e) {
            return e;
          }
          } 

} 
module.exports = routes;