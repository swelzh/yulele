

module.exports = function(app, db){

    app.get('/test1/', function(req, res){
        res.send('This is the test1!')
    });

    //other routes..
}