const express = require('express')
const router = express.Router()
const lastfm = require('../lastfm')


router.get('/', (req,res) => {
   const username = req.query.username
   lastfm.user.getFriends({user: username}, (err, data) => {
        if(err){
            console.error(err)
            res.status(500).send("error getting user friends")
        }else{
            console.log("data ",data.user)
            const friends = data?.user?.map(({ name, url }) => ({ name, url }))
            res.send(friends)
        }
   })
})

module.exports = router

