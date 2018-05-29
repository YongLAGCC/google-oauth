const router = require('express').Router(); 
const passport = require('passport');

// auth login 
router.get('/login', (req, res) =>{
    res.render('login', {user: req.user});
});

//auth log out
router.get('/logout', (req, res) => {
    //handle with passport   
    res.send('logging out');
});

//auth with goolge
router.get('/google', passport.authenticate('google', { // authenticate is method. 
    scope: ['profile']  // what you want toretrive.
}));

//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {  // send back to consent screen so the user can log in
    res.send('you reached the callback uri');
}); // authenticated with Google and we've saiid to passport, this user is allowing to their information

module.exports = router;