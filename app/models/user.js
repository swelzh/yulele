var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var userSchema = new Schema({
	name: String,
	username: {type: String, required: true, unique: true},
	password: { type: String, required: true },
	admin: Boolean,
	location: String,
	meta: {
	  age: Number,
	  website: String
	},
	created_at: Date,
	updated_at: Date
});

//  custom method
userSchema.methods.dudify = function() {
	this.name = this.name + '-dude';
	return this.name;
};


// 截获save方法
userSchema.pre('save',function(next){
	var currentDatae = new Date();
	this.updated_at = currentDatae;
	if (!this.created_at) {
		this.currentDatae = currentDatae;
		next();
	}
});


var User = mongoose.model('User', userSchema);

module.exports = User;


// The allowed SchemaTypes are:
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array