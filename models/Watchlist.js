const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const WatchlistSchema = new Schema({
    name: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Watchlist = mongoose.model('Watchlist', WatchlistSchema);