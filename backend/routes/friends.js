const express = require('express')
const lastfmAPI = require('lastfmapi')
const router = express.Router()
const lastfm = new lastfmAPI({
    api_key: '42d170c6dcf4165872eaa48f7513b45d',
    secret: "6dbd780e0f7e487852b79cfe9ed3198c"
})

router.get('/', (req,res) => {
   const username = req.query.username
   lastfm.user.getFriends({user: username}, (err, data) => {
        if(err){
            console.error(err)
            res.status(500).send("error getting user friends")
        }else{
            console.log("data ",data)
            const friends = data.friends?.user.map(friend => friend.name)
            res.send(friends)
        }
   })
})

module.exports = router

