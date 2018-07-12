const core = require('./core');

core.app.use(core.express.static(__dirname + '/public'));

var server = core.http.listen(3001, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

core.io = require('socket.io').listen(server);