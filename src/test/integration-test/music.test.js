require("dotenv").config();
const { response } = require("express");
const randomstring = require("randomstring");
beforeAll(() => {
  process.env.NODE_ENV = "development";
});

 const routes = require("./music");


describe(`Here Must Test The Integration`, () => {
  test(`CREATE ---------- must test if data is exist! : STATUS CODE 400`, async () => {
    try { 
      const resR = await routes.readSongs()
      const fetchDataAll = resR.data.view
      const fetch = fetchDataAll[fetchDataAll.length - 1]
      const info = {title:fetch.title,composer:fetch.composer}
      const res = await routes.addSongs({info})
      const StatusCode = res.response.status;
      expect(StatusCode).toBe(400)
    } catch (error) {
  console.log(error)   
   }
  });
  test(`CREATE ---------- must test if some data is empty! : STATUS CODE 400`, async () => {
    try {
      const info = {title:null,composer:null}
      const res = await routes.addSongs({info})
      const StatusCode = res.response.status;
      expect(StatusCode).toBe(400)
    } catch (error) {
       console.log(error)
    }
  });
  test(`CREATE ---------- must test if data is save! : STATUS CODE 200`, async () => {
    try {
      const info = {
        title: randomstring.generate({
          length: 12,
          charset: "alphabetic",
        }),  
        composer: randomstring.generate({
          length: 12,
          charset: "alphabetic",
        })
          }
      const res = await routes.addSongs({info})
      const StatusCode = res.status; 
      expect(StatusCode).toBe(200)
    } catch (error) {
        console.log(error)
    }
  });
  test(`READ ---------- must test if data is exist! : STATUS CODE 200`, async () => {
    try {
      const res = await routes.readSongs() 
      const StatusCode = res.status; 
      expect(StatusCode).toBe(200)
    } catch (error) {
        console.log(error)
    }
  });
  
  test(`READ ---------- must test if data id not available! : STATUS CODE 400`, async () => {
    try {  
      const resR = await routes.readSongs()
      const fetchDataAll = resR.data.view 
      const rand =  Math.floor(Math.random() * 1000000); 
      for (let i = 0; i < fetchDataAll.length; i++) {
      const elements = fetchDataAll[i].id;
      if(rand == elements)
      {
      rand++
      }
      }   
      const res = await routes.readSongsID({rand})  
      const StatusCode = res.response.status; 
      expect(StatusCode).toBe(400)
    } catch (error) {
       console.log(error)
    }
  });
  
  test(`READ ---------- must test if data with parameter exist! : STATUS CODE 200`, async () => {
    try {
      const resR = await routes.readSongs()
      const fetchDataAll = resR.data.view
      const fetch = fetchDataAll[fetchDataAll.length - 1]
      const id = fetch.id 
      const res = await routes.readSongsID(id)
      const StatusCode = res.status; 
      expect(StatusCode).toBe(200) 
    } catch (error) {
       console.log(error)
    }
  });
   
  test(`UPDATE ---------- must test if theres empty fields! : STATUS CODE 400`, async () => {
    try { 
        const resR = await routes.readSongs()
        const fetchDataAll = resR.data.view
        const fetch = fetchDataAll[fetchDataAll.length - 1]
        const id = fetch.id 
        const info = {title:null,composer:null}
        const res = await routes.updateSongs({id,info})
        const StatusCode = res.response.status; 
        expect(StatusCode).toBe(400)  
    } catch (error) {
        console.log(error)
    }
  });
  
  test(`UPDATE ---------- must test if theres is exist data! : STATUS CODE 400`, async () => {
    try {
      const resR = await routes.readSongs()
      const fetchDataAll = resR.data.view
      const fetch = fetchDataAll[fetchDataAll.length - 1]
      const id = fetch.id
      const info = {title:fetch.title,composer:fetch.composer}
      const res = await routes.updateSongs({id,info})
      const StatusCode = res.response.status; 
      expect(StatusCode).toBe(400)
    } catch (error) {
       console.log(error)
    }
  });
  
  test(`UPDATE ---------- must test if theres no exist id in the record! : STATUS CODE 400`, async () => {
    try {
      const resR = await routes.readSongs()
      const fetchDataAll = resR.data.view 
      const rand =  Math.floor(Math.random() * 1000000); 
      for (let i = 0; i < fetchDataAll.length; i++) {
      const elements = fetchDataAll[i].id;
      if(rand == elements)
      {
      rand++
      }
      }
      const id = rand
      const info = {
        title: randomstring.generate({
          length: 12,
          charset: "alphabetic",
        }),  
        composer: randomstring.generate({
          length: 12,
          charset: "alphabetic",
        })
          } 
      const res = await routes.updateSongs({id,info})
      const StatusCode = res.response.status; 
      expect(StatusCode).toBe(400)  
    } catch (error) {
       console.log(error.message)
    }
  });
  
  test(`UPDATE ---------- must test if update successfully! : STATUS CODE 200`, async () => {
    try { 
      const resR = await routes.readSongs()
      const fetchDataAll = resR.data.view
      const fetch = fetchDataAll[fetchDataAll.length - 1]
      const id = fetch.id
      const info = {
        title: randomstring.generate({
          length: 12,
          charset: "alphabetic",
        }),  
        composer: randomstring.generate({
          length: 12,
          charset: "alphabetic",
        })
          } 
          const res = await routes.updateSongs({id,info})
          const StatusCode = res.status; 
          expect(StatusCode).toBe(200)
    } catch (error) {
       console.log(error)
    }
  });
  
  test(`DELETE ---------- must test if id doesn't is exist : STATUS CODE 400`, async () => {
    try {
      const resR = await routes.readSongs()
      const fetchDataAll = resR.data.view 
      const rand =  Math.floor(Math.random() * 1000000); 
      for (let i = 0; i < fetchDataAll.length; i++) {
      const elements = fetchDataAll[i].id;
      if(rand == elements)
      {
      rand++
      }
      }
      const id = rand
      const res = await routes.deleteSongs(id)
      const StatusCode = res.response.status; 
      expect(StatusCode).toBe(400)
    } catch (error) {
        console.log(error)
    }
  });
  
  test(`DELETE ---------- must test if delete successfully`, async () => {
    try {
      const resR = await routes.readSongs()
      const fetchDataAll = resR.data.view
      const fetch = fetchDataAll[fetchDataAll.length - 1]
      const id = fetch.id
      const res = await routes.deleteSongs(id)
      const StatusCode = res.status; 
      expect(StatusCode).toBe(200)
    } catch (error) {
       console.log(error)
    }
  });
  

})