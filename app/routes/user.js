var User = require('../models/user')
// var utils = require('./utils/utils')

module.exports = function(app, db){

    // post notes
	app.post('/user', (req, res) => {
   		 // You'll create your note here.
   		console.log('username:'+req.body.username + ',' + 'password:'+req.body.password);

   		var chris = new User({
	        name: 'Chris',
	        username: req.body.username,
	        password: req.body.password
	    });

   		// call the built-in save method to save to the database
	    chris.save(function(err) {
	        if (err) {
	        	res.send('User save error!')	
	        	throw err;
	        }
	        res.send('User saved successfully!')
	    });
        // utils.createUser()
    });

    //other routes..
}