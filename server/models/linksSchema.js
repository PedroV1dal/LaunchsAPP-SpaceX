const mongoose = require("mongoose")

const linksSchema = new mongoose.Schema({
    patch: {
        small: String,
        large: String
    },
    reddit: {
        campaign: String,
        launch: String,
        media: String,
        recovery: String
    },
    flickr: {
        small: Array,
        original: Array
    },
    presskit: String,
    webcast: String,
    youtube_id: String,
    article: String,
    wikipedia: String
});

module.exports = linksSchema