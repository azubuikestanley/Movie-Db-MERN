const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const watchlist = require('./routes/api/watchlist');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db,{ 
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false, 
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDb Connected...'))
    .catch(err => console.log(err));

//Use Routes  
app.use('/api/watchlist', watchlist);  

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));