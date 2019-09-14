

//   //678839426958-3bh9ge6hrtrkm154137u3i21ki9j85kr.apps.googleusercontent.com,//client ID
// //  bJKSmM9QBN3tMs2JYFCmXpuZ, //client secret
// //  localhost:3000/callback/url
//starting the express app

'use strict';

var readline = require('readline');

var google = require('googleapis');
//var googleAuth = require('google-auth-library');

const { OAuth2Client } = require('google-auth-library');;

//var auth = new OAuth2Client();
//var OAuth2Client = auth.OAuth2;
//var plus = google.plus('v1');

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = '678839426958-3bh9ge6hrtrkm154137u3i21ki9j85kr.apps.googleusercontent.com'; // removed for posting to GitHub
var CLIENT_SECRET = 'bJKSmM9QBN3tMs2JYFCmXpuZ'; // removed for posting to GitHub
var REDIRECT_URL = 'https://localhost:3000/callback/url';

var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getAccessToken (oauth2Client, callback) {
  // generate consent page url
  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // will return a refresh token
    scope: 'https://www.googleapis.com/auth/plus.me' // can be a space-delimited string or an array of scopes
  });

  console.log('Visit the url: ', url);
  rl.question('Enter the code here:', function (code) {
    // request access token
    oauth2Client.getToken(code, function (err, tokens) {
      if (err) {
        return callback(err);
      }
      // set tokens to the client
      // TODO: tokens should be set by OAuth2 client.
      oauth2Client.credentials = tokens;
      callback();
    });
  });
}

// retrieve an access token
getAccessToken(oauth2Client, function () {
  // retrieve user profile
  var res = people.get({ userId: 'me', auth: oauth2Client }, function (err, profile) {
    if (err) {
      return console.log('An error occured', err);
    }
    console.log(profile.displayName, ':', profile.tagline);
  });
});




















// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express()
// const request = require('request');
// const apiKey = '30c490a21bf9fd4c42db618dd4ea1147';
// var GoogleStrategy = require('passport-google-oauth20').OAuth2Strategy;
//
// passport.use(new GoogleStrategy({
//     clientID: '678839426958-3bh9ge6hrtrkm154137u3i21ki9j85kr.apps.googleusercontent.com',
//     clientSecret: 'bJKSmM9QBN3tMs2JYFCmXpuZ',
//     callbackURL: "localhost:3000/callback/url"
//   },
//
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));
//
// //https://localhost:3000 - that's where we are going...
//
//
//   //678839426958-3bh9ge6hrtrkm154137u3i21ki9j85kr.apps.googleusercontent.com,//client ID
// //  bJKSmM9QBN3tMs2JYFCmXpuZ, //client secret
// //  localhost:3000/callback/url
//
//
//
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs')
//
// app.get('/', function (req, res) {
//   res.render('index', {weather: null, error: null});
// })
//
// app.post('/', function (req, res) {
//   let city = req.body.city;
//   let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
//
//   request(url, function (err, response, body) {
//     if(err){
//       res.render('index', {weather: null, error: 'Error, please try again'});
//     } else {
//       let weather = JSON.parse(body)
//       if(weather.main == undefined){
//         res.render('index', {weather: null, error: 'Error, please try again'});
//       } else {
//         let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
//         res.render('index', {weather: weatherText, error: null});
//       }
//     }
//   });
// })
//
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })
