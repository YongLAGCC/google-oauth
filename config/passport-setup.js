// downlaod two libraries: npm install passport passport-google-oauth20
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');

passport.use(
    new GoogleStrategy({   
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect',
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function fired:');
        console.log(profile);
        console.log('callback the username: ', profile.displayName),
        new User({
            username : profile.displayName,
            googleId : profile.id,
            
        }).save(). then((newUser) => { // recoder // then means, not asichrnize, wait save finish, then next
            concole.log(newUser + '&&&&&&&&');
            console.log('new user created: '+ newUser);
            
        })
    })
); 