import mongoose from 'mongoose'



const players = mongoose.Schema({
    player: String,
    wins: String,
    lose: String,
})

export default mongoose.model('players',players)