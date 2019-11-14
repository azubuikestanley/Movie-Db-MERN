const express = require('express');
const router = express.Router();

//Watchlist Model
const Watchlist = require('../../models/Watchlist');
//@route GET api/Watchlist
//@description Get All Watchlist
//@access Public
router.get('/', (req, res) => {
    Watchlist.find()
    .sort({ date: -1 })
    .then(watchlist => res.json(watchlist))
});

//@route POST api/Watchlist
//@description Create Watchlist
//@access Public
router.post('/', (req, res) => {
    const newWatchlist = new Watchlist({
        name: req.body.name
    });

    newWatchlist.save().then(Watchlist => res.json(Watchlist));
});

//@route DELETE api/Watchlist
//@description DELETE Watchlist
//@access Public
router.delete('/:id', (req, res) => {
    Watchlist.findById(req.params.id)
    .then(watchlist => watchlist.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({ success: false }));
})



module.exports = router;