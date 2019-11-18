const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

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

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));