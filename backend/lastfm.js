const dotenv = require('dotenv');
const lastfmAPI = require('lastfmapi')

dotenv.config()

const lastfm = new lastfmAPI({
    api_key: process.env.LASTFM_API_KEY,
    secret: process.env.LASTFM_SECRET
})

module.exports = lastfm;
