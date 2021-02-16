const makeMusic = ({}) => {
    return async function make({title,composer} = {}){
        if (!title) {throw new Error("Please put a song title!!")}
        if (!composer) {throw new Error("Please put a composer of the song!!")}
        return Object.freeze({
            getT:()=> title,
            getC:()=> composer,
        })
    }
}
module.exports = makeMusic