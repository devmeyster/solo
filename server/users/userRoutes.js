var userController = require('./userController.js');
var gitHub = require('../githubcred.js');
var User = require('./userModel.js');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

passport.serializeUser(function(user, done){
  return done(null, user.id);
});

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    return done(null, user);
  })
});

passport.use(new GitHubStrategy({
    clientID: gitHub.clientId,
    clientSecret: gitHub.clientSecret,
    callbackURL: "http://localhost:3000/api/users/login/github"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({ githubId: profile.id
    }, function (err, user) {
      if (user) {
        return done(err, user);
      } else {
        user = new User({
          githubId: profile.id
        });
        user.save(function(err){
          if(err) console.log(err);
          return done(err, user);
        });
      }
    });
  }
));

module.exports = function (app) {
  // app === userRouter injected from middlware.js
  app.use(passport.initialize());

  app.get('/signin', passport.authenticate('github'));
  // app.get('/signup', passport.authenticate('github', {
  //   failureRedirect: '/signup'
  // }), userController.signup);
  app.get('/login/github', passport.authenticate('github', {
    failureRedirect: '/signin'
  }), function(req, res){
    console.log("user: ", req.user);
    res.redirect('/')
  });
  // app.get('/signedin', userController.checkAuth);
};
