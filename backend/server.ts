import express, {Express, Request, Response} from 'express'


const app: Express  = express()

const friendsRoutes:any = require('./routes/friends')
const commonArtistRoutes: any = require('./routes/common_artist')

app.use('/common_artist', commonArtistRoutes);
app.use('/friends', friendsRoutes);

app.get('/', (req: Request,res : Response) => {
    res.send("hello world")
})

const PORT = process.env.PORT || 9001
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)   
})

