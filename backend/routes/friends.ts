
const lastfm = require('../lastfm')
import express, {Express, Request, Response} from 'express'
const router = express.Router()

interface Friend {
    name: string
    url: string
    [key : string] : any
}

interface Image {
    size: string;
    "#text": string;
  }

  interface Image {
    size: string;
    '#text': string;
  }
  

router.get('/', (req : Request,res: Response) => {
   const username = req.query.username
   lastfm.user.getFriends({user: username}, (err : any, data : any) => {
        if(err){
            console.error(err)
            res.status(500).send("error getting user friends")
        }else{
            console.log("data ", data?.user?.length)
            const friends = data?.user as Friend[]
            const friendsInfo = friends.map(friend => ({
                name: friend.name,
                url: friend.url,
                images: friend.image.find((img: Image)  => img.size === "extralarge")?.["#text"]
              }));
            res.send(friends)
        }
   })
})

module.exports = router

