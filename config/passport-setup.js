// downlaod two libraries: npm install passport passport-google-oauth20
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        // options for google strategy
        callbackURL:'/auth/google/redirect', //redirect to "allow page"
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        
    }, (accessToken, refreshToken, profile, done) => {//profile is the code that goolge gave
        // passport callback function
        console.log('passport callback function fired');
        console.log(profile);
    })
);