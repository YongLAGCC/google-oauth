const express = require('express');
const authRouter = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');


const app = express(); 

//set up view engine
app.set('view engine', 'ejs');

mongoose.connect(keys.mongodb.dbURI, () => {// callback 
    console.log('connected to mongodb');
})

//set up and use router // (http, router)
app.use('/auth', authRouter);// the first param is the route that is before address of router file

app.get('/', (req, res) => { 
    res.render('home'); 
})

app.listen(3000, ()=> {
    console.log('app now listening for require on port 3000');
}); 

