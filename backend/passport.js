const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require('passport')
const GOOGLE_CLIENT_ID = "149026303498-8feqpejh4et70udgo4ic7g3o2us347ea.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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";


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.use(
    new GithubStrategy(
      {
        clientID: "34976b0d3ef5274efff5",
        clientSecret: "c297cc69c137dd4e70bcee472d444cc7f8eefeee",
        callbackURL: "/auth/github/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );
  
//   passport.use(
//     new FacebookStrategy(
//       {
//         clientID: FACEBOOK_APP_ID,
//         clientSecret: FACEBOOK_APP_SECRET,
//         callbackURL: "/auth/facebook/callback",
//       },
//       function (accessToken, refreshToken, profile, done) {
//         done(null, profile);
//       }
//     )
//   );

passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
