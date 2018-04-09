var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/user");

var utils = {};

// Restrict access to root page
utils.createUser = function(req, res) {

	var chris = new User({
        name: 'Chris',
        username: 'sevilayha5',
        password: 'password'
    });


    // call the custom method. this will just add -dude to his name
    chris.dudify(function(err, name){
        if (err) throw err;
        console.log('Your new name is ' + name);
    });

    // call the built-in save method to save to the database
    chris.save(function(err) {
        if (err) throw err;
        console.log('User saved successfully!');
    });
/*

	// get all the users
	User.find({}, function(err, users) {
	  if (err) throw err;

	  // object of all the users
	  console.log(users);
	});


	// get the user by name: starlord55
	User.find({ username: 'sevilayha1' }, function(err, user) {
	  if (err) throw err;

	  // object of the user
	  console.log(user);
	});

	// get a user with ID of 1
	User.findById('5ac7069fc54af0087298bd1f', function(err, user) {
		if (err) throw err;

		// show the one user
		console.log(user);

		// Update user
		user.location = 'shenzhen';
		user.save(function(err){
	  		if (err) throw err;
	   	 	console.log('User successfully updated!');
	    });


	});
	

	// Querying: get any admin that was created in the past month
	// get the date 1 month ago
	var monthAgo = new Date();
	monthAgo.setMonth(monthAgo.getMonth() - 1);

	User.find({ admin:true }).where('created_at').gt(monthAgo).exec(function(err, users){
		 if (err) throw err;

		  // show the admins in the past month
		  console.log(users);
	});

	// find the user starlord55
	// update him to starlord 88
	User.findOneAndUpdate({ username: 'lizhihua' }, { username: '天才少年' }, function(err, user) {
	  if (err) throw err;

	  // we have the updated user returned to us
	  console.log(user);
	});

	// // find the user with id 4
	// // update username to starlord 88  {new: true} ——表示返回修改后的数据，否则返回修改前的数据
	User.findByIdAndUpdate('5ac7069fc54af0087298bd1f', { username: 'starlord99' }, {new: true} ,function(err, user) {
	    if (err) throw err;

	    // we have the updated user returned to us
	    console.log(user);
	});

		
	// find the user with id 4
	User.findOneAndRemove({ username: 'sevilayha2' }, function(err) {
	  if (err) throw err;

	  // we have deleted the user
	  console.log('User deleted!');
	});



	

// find the user with id 4
User.findByIdAndRemove('5ac70d627e7c0a097fb6a6ef', function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});

	*/

}; 


module.exports = utils;