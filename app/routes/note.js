var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
	
	app.get('/notes', function (req, res) {
	  res.send('hello notes');
	})


	// post notes
	app.post('/notes', (req, res) => {
   		 // You'll create your note here.
   		console.log('title:'+req.body.title + ',' + 'content:'+req.body.content)
   		const note = { content: req.body.content, title: req.body.title };
   		console.log(db)

	    db.collection('notes').insert(note, (err, result) => {

	      if (err) { 
	        res.send({ 'error': 'An error has occurred' }); 
	      } else {
	        res.send(result.ops[0]);
	      }
	    });
 	});

	// get notes
	app.get('/notes/:id',(req, res)=> {

		const id = req.params.id;
		const details = {'_id': new ObjectID(id) };
		console.log('get notes/' + id)

		db.collection('notes').findOne(details, (err, item) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			}else {
				res.send(item);
			}
		});
	});


	// DELETE Route
	app.delete('/notes/:id', (req, res)=>{
		const id = req.params.id;
		const details = { '_id' : new ObjectID(id) };
		db.collection('notes').remove(details, (err, item) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			}else {
				res.send('Note ' + id + ' deleted!');
			}
		});
	});


	 // UPDATE Route
	 app.put('/notes/:id', (req, res) => {
	 	const id = req.params.id;
	 	const details = { '_id' : new ObjectID(id) };
	 	const note = { content: req.body.content, title: req.body.title};
	 	db.collection('notes').update(details, note, (err, result) => {
	 		if (err) {
	 			res.send( {'error': 'An error has occurred'});
	 		}else {
	 			res.send(note);
	 		}
	 	});
	 });


};





