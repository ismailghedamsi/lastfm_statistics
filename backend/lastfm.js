const dotenv = require('dotenv');
const lastfmAPI = require('lastfmapi')

dotenv.config()

const lastfm = new lastfmAPI({
    // api_key: '42d170c6dcf4165872eaa48f7513b45d',
    // secret: "6dbd780e0f7e487852b79cfe9ed3198c"

    api_key: process.env.LASTFM_API_KEY,
    secret: process.env.LASTFM_SECRET
})

module.exports = lastfm;
