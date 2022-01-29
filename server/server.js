import express from 'express'
import mongoose from 'mongoose'
import Teams from './dbTeams.js'

//App Config
const app = express()
const PORT = process.env.PORT || 8001
const connectionUrl = 'mongodb+srv://admin:admin@cluster0.zb4er.mongodb.net/kickerdb?retryWrites=true&w=majority'
//Middleware

app.use(express.json())


//BD config
//     ,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// }
mongoose.connect(connectionUrl)

//API Endpoints
app.get('/',(req,res)=>{
    return res.status(200).send("HEllo")
})

app.post('/teams',(req,res)=>{
    const dbTeams = req.body


    Teams.create(dbTeams,(err,data)=>{
        if (err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/teams',(req,res)=>{
    Teams.find((err,data)=>{
        if (err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(PORT,()=>console.log(`listenen on localhost ${PORT}`))
