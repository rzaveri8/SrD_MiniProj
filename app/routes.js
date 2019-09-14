// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, nerds) {

                // if there is an error retrieving, send the error.
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

        // route for home page
       app.get('/', function(req, res) {
         res.render('index.ejs'); // load the index.ejs file
       });

   // route for login form
   // route for processing the login form
   // route for signup form
   // route for processing the signup form

   // route for showing the profile page
      app.get('/profile', isLoggedIn, function(req, res) {
              res.render('profile.ejs', {
              user : req.user // get the user out of session and pass to template
            });
          });

   // route for logging out
   app.get('/logout', function(req, res) {
       req.logout();
       res.redirect('/');
   });

   // facebook routes
   // twitter routes

   // =====================================
   // GOOGLE ROUTES =======================
   // =====================================
   // send to google to do the authentication
   // profile gets us their basic information including their name
   // email gets their emails
   app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

   // the callback after google has authenticated the user
   app.get('/auth/google/callback',
           passport.authenticate('google', {
                   successRedirect : '/profile',
                   failureRedirect : '/'
           }));

// route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {

   // if user is authenticated in the session, carry on
   if (req.isAuthenticated())
       return next();

   // if they aren't redirect them to the home page
   res.redirect('/');
}

    };
