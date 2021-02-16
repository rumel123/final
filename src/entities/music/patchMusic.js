const patchMusic = ({}) => {
    return function make(id,{title,composer} = {}){ 
        if (!id) 
        {throw new Error("Please enter the ID!!")} 
        if (!title)
        {throw new Error("Please put a song title!!")}
        if (!composer)  
        {throw new Error("Please put a composer of the song!!")}
        return Object.freeze({
            getID:()=> id,
            getT:()=> title,
            getC:()=> composer,
        })
    }
}
module.exports = patchMusic