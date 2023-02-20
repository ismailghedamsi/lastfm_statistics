const express = require('express')
const app  = express()

const friendsRoutes = require('./routes/friends')
const commonArtistRoutes = require('./routes/common_artist')

app.use('/common_artist', commonArtistRoutes);
app.use('/friends', friendsRoutes);

app.get('/', (req,res) => {
    res.send("hello world")
})

const PORT = process.env.PORT || 9001
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)   
})

