import express from 'express'
import mongoose from 'mongoose'
import Players from './models/dbPlayers.js'
import Teams from './models/dbTeams.js'

//App Config
const app = express()
const PORT = process.env.PORT || 8001
const connectionUrl = 'mongodb+srv://admin:admin@cluster0.zb4er.mongodb.net/kickerdb?retryWrites=true&w=majority'
//Middleware

app.use(express.json())
  app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
      next();
    });
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
            Players.create({
            player: dbTeams.secondplayername,
            wins: 0,
            lose: 0,
        },(err,data)=>{
            if (err){
                res.status(500).send(err)
            }
        })
        Players.create({
        player: dbTeams.firstplayername,
        wins: 0,
        lose: 0,
    },(err,data)=>{
        if (err){
            res.status(500).send(err)
        }
    })
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
app.get('/players',(req,res)=>{
    Players.find((err,data)=>{
        if (err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
app.delete('/teams/:id', (req, res) => {
         
    const id = req.params.id;
    // const collection = req.app.locals.collection;
    Teams.findOneAndDelete({_id: id}, function(err, result){
               
        if(err) return console.log(err);    
        let info = result.value;
        res.send(info);
    });
  res.send("DELETE Request Called")
})

//Listener
app.listen(PORT,()=>console.log(`listenen on localhost ${PORT}`))
