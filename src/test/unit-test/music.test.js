const randomstring = require('randomstring')  
const {addSongs,readSongs,updateSongs,deleteSongs} = require('../../use-cases/app')
 
 beforeAll(() => {
  process.env.NODE_ENV = "development";
});

describe('Group of unit Testing Music', () => {
test(`CREATE ---------- must test if data is exist!`, async () => {
  try {
    let id = {}
    const ReadC = await readSongs(id)
    const ArrayResult = ReadC[ReadC.length -1]
    const data = {title:ArrayResult.title,composer:ArrayResult.composer}
    const res = await addSongs(data)
  } catch (error) {
    expect(error.toString()).toBe(`Error: Song is Exist in same composer, please put a new Song`)
  }
});
test(`CREATE ---------- must test if some data is empty!`, async () => {
  try {
    let id = {}
    const ReadC = await readSongs(id)
    const ArrayResult = ReadC[ReadC.length -1]
    const data = {title:null,composer:ArrayResult.composer}
    const res = await addSongs(data)
    console.log();
  } catch (error) {
    expect(error.toString()).toBe(`Error: Please put a song title!!`)
    //console.log(error)
  }
});
test(`CREATE ---------- must test if data is save!`, async () => {
  try {
    const data = { 
      title: randomstring.generate({
        length: 12,
        charset: "alphabetic",
      }),  
      composer:randomstring.generate({
        length: 12,
        charset: "alphabetic",
      }),  
    };
    const res = await addSongs(data) 
    expect(res).toBeDefined()
  } catch (error) {
    //expect(error.toString()).toBe(` `)
    console.log(error)
  }
});
test(`READ ---------- must test if data is exist!`, async () => {
  try {
    const data = {}
    const res = await readSongs(data) 
    expect(res).toBeDefined() 
  } catch (error) {
    //expect(error.toString()).toBe(` `)
     console.log(error)
  }
});

test(`READ ---------- must test if data id not available!`, async () => {
  try {  
    const data = {}
    const resR = await readSongs(data) 
    const rand =  Math.floor(Math.random() * 1000000);
    for (let i = 0; i < resR.length; i++) {
      const elements = resR[i].id;
      if(rand == elements)
      {
        rand++
      }
    } 
    const res = await readSongs({id:rand})  
    //expect(res).toBe(`Data is not available on this ID!!`)
  } catch (error) {
     expect(error.toString()).toBe(`Error: Data is not available on this ID!!`)
    //console.log(error)
  }
});

test(`READ ---------- must test if data with parameter exist!`, async () => {
  try {
    let id = {}
    const ReadC = await readSongs(id)
    const ArrayResult = ReadC[ReadC.length -1]
    const data = {id:ArrayResult.id}
    const res = await readSongs(data)
    expect(res).toBeDefined()
  } catch (error) {
    //expect(error.toString()).toBe(` `)
     console.log(error)
  }
});
 
test(`UPDATE ---------- must test if theres no empty fields!`, async () => {
  try {
    let id = {}
    const ReadC = await readSongs(id)
    const ArrayResult = ReadC[ReadC.length -1]
    const data = {id:ArrayResult.id,title:null,composer:null}
    const res = await updateSongs(data) 
  } catch (error) {
     expect(error.toString()).toBe(`Error: Please put a song title!!`)
    //console.log(error)
  }
});

test(`UPDATE ---------- must test if theres is exist data!`, async () => {
  try {
    let id = {}
    const ReadC = await readSongs(id)
    const ArrayResult = ReadC[ReadC.length -1] 
    const data = {id:ArrayResult.id,title:ArrayResult.title,composer:ArrayResult.composer}
    const res = await updateSongs(data) 
    console.log(res)
  } catch (error) {
    expect(error.toString()).toBe(`Error: Inputed Data is exist Please Try new.`)
    //console.log(error)
  }
});

test(`UPDATE ---------- must test if theres no exist id in the record!`, async () => {
  try {
    let id = {}
    const ReadC = await readSongs(id)
    const rand =  Math.floor(Math.random() * 1000000);
    for (let i = 0; i < ReadC.length; i++) {
      const elements = ReadC[i].id;
      if(rand == elements)
      {
        rand++
      }
    }  
    const ArrayResult = ReadC[ReadC.length -1]  
    const data = {
      id:rand,
      title:randomstring.generate({
      length: 12,
      charset: "alphabetic",
    }), composer:randomstring.generate({
      length: 12,
      charset: "alphabetic",
    })}
  const res = await updateSongs(data)   
  //expect(res).toBe(``)
  } catch (error) {
    expect(error.toString()).toBe(`Error: unable to update Data is exist or the id is Doesnt exist, please check it carefully`)
    // console.log(error.message)
  }
});

test(`UPDATE ---------- must test if update successfully!`, async () => {
  try { 
    let id = {}
    const ReadC = await readSongs(id) 
    const ArrayResult = ReadC[ReadC.length -1]   
    const data = {
      id:ArrayResult.id,
      title:randomstring.generate({
      length: 12,
      charset: "alphabetic",
    }), composer:randomstring.generate({
      length: 12,
      charset: "alphabetic",
    })}
    const res = await updateSongs(data) 
     expect(res).toBe(`Update Successfully!`)
  } catch (error) {
    //expect(error.toString()).toBe(` `)
     console.log(error)
  }
});

test(`DELETE ---------- must test if id doesn't is exist`, async () => {
  try {
    let id = {}
    const ReadC = await readSongs(id)
    const rand =  Math.floor(Math.random() * 1000000);
    for (let i = 0; i < ReadC.length; i++) {
      const elements = ReadC[i].id;
      if(rand == elements)
      {
        rand++
      }
    }   
    const res = await deleteSongs(rand) 
  } catch (error) {
     expect(error.toString()).toBe(`Error: Data doesn't exist pleasse choose other id`)
    //console.log(error)
  }
});

test(`DELETE ---------- must test if delete successfully`, async () => {
  try {
    const id ={}
    const ReadC = await readSongs(id) 
    const ArrayResult = ReadC[ReadC.length -1]   
    const data = {id:ArrayResult.id} 
    const res = await deleteSongs(data)
    expect(res).toBe(`Delete Successfully`)
  } catch (error) {
    //expect(error.toString()).toBe(` `)
     console.log(error)
  }
});

}); 