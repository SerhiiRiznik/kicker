import mongoose from 'mongoose'



const games = mongoose.Schema({
    game: String,
    result: String,
})

export default mongoose.model('games',games)