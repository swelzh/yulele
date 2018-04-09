var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = require('./user').schema

// create a schema
var gameSchema = new Schema({

	name: String,
	location: String,
	sender: { 
		type: Schema.Types.ObjectId, 
		ref: 'User' 
	},
	reciver:{ 
		type: Schema.Types.ObjectId, 
		ref: 'User' 
	},
	winer:{ 
		type: Schema.Types.ObjectId, 
		ref: 'User' 
	},
	senderScore:Number,
	reciverScore:Number,
	created_at: Date,
	updated_at: Date
});

//  custom method
gameSchema.methods.dudify = function() {
	return this.name;
};


// 截获save方法
gameSchema.pre('save',function(next){

	// this.winner =  this.senderScore > this.reciverScore ? this.sender : this.reciver ;
	// console.log('this.winner: ' + this.winner)

	var currentDatae = new Date();
	this.updated_at = currentDatae;
	if (!this.created_at) {
		this.currentDatae = currentDatae;
		next();
	}
});


var Game = mongoose.model('Game', gameSchema);

module.exports = Game;
