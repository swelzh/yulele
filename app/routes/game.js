var ObjectID = require('mongodb').ObjectID;
var Game 	 = require('../models/game');
var User 	 = require('../models/user')
// var utils = require('./utils/utils')


// function saveGame() {
// 	console.log('saveGame');
// }


module.exports = function(app, db){

	saveGame = function() {
		 // You'll create your note here.
   		const senderId =  '5ac7069fc54af0087298bd1f';
   		const reciverId =  '5aca2eaae56bf74bcfcccbc9';
   		const winnerId = senderId;

		var game = new Game({
	        name: 'Game4',
	        sender: senderId    ,// user1,
	        senderScore:21,
	        reciver: reciverId, // user2,
			reciverScore:11,
			winner: winnerId 	        
	    });

		// call the built-in save method to save to the database
	    game.save(function(err) {
	        if (err) {
	        	res.send(err)	
	        	throw err;
	        }
	        res.send('Game saved successfully!')
	    });
	}

	// 
	queryGame = function (req, res) {

		const senderId =  '5ac7069fc54af0087298bd1f';
   		const reciverId =  '5aca2eaae56bf74bcfcccbc9';
   		const perPage = 5 || req.body.pageSize ;
   		const page = 0 || req.body.pageNum;

		const query = Game.find(); // `query` is an instance of `Query`
		query.collection(Game.collection);
		query.or([{ sender: senderId }, { reciver: reciverId }]);
	    query.limit(perPage);
	    query.skip(perPage * page)
		query.exec(function (err, games) {
			if (err) return handleError(err);
		  	console.log('games:\n' + games);
		});
	}

    // generate one game 
	app.post('/game', (req, res) => {
   		
		queryGame(req, res); return;
		if (req.body.method == 'save') {
			saveGame();	
		}else if (req.body.method == 'query') {
			queryGame(req, res); 
		}
    });
 	
}