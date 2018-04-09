var ObjectID = require('mongodb').ObjectID;
var Game 	 = require('../models/game');
var User 	 = require('../models/user')
// var utils = require('./utils/utils')

module.exports = function(app, db){

    // generate one game 
	app.post('/game', (req, res) => {
   		 // You'll create your note here.



		var game = new Game({
	        name: 'Game4',
	        sender: '5ac7069fc54af0087298bd1f'    ,// user1,
	        senderScore:21,
	        reciver:'5aca2eaae56bf74bcfcccbc9', // user2,
			reciverScore:11,
			winner: '5ac7069fc54af0087298bd1f' 	        
	    });

   		// call the built-in save method to save to the database
	    game.save(function(err) {
	        if (err) {
	        	res.send(err)	
	        	throw err;
	        }
	        res.send('Game saved successfully!')
	    });
    });


	// get game list + cusor



	// get single game
	// to do 

}