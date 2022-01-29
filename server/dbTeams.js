import mongoose from 'mongoose'



const teamInfo = mongoose.Schema({
    team: String,
    info: String,
})

export default mongoose.model('team',teamInfo)