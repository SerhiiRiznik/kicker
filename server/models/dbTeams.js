import mongoose from 'mongoose'



const teamInfo = mongoose.Schema({
    teamname: String,
    firstplayername: String,
    secondplayername: String,
})

export default mongoose.model('team',teamInfo)