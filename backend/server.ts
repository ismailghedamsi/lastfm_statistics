import express, {Express, Request, Response} from 'express'
import cors, { CorsOptions } from 'cors'


const app: Express  = express()

const corsOptions: CorsOptions = {
    origin: 'http://localhost:8080'
}


const friendsRoutes:any = require('./routes/friends')
const commonArtistRoutes: any = require('./routes/common_artist')

app.use(cors(corsOptions))
app.use('/common_artist', commonArtistRoutes);
app.use('/friends', friendsRoutes);

app.get('/', (req: Request,res : Response) => {
    res.send("hello world")
})

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

const PORT = process.env.PORT || 9002
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)   
})

