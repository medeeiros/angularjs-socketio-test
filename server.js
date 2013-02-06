var connect = require('connect'),
    socketio = require('socket.io');

var port = process.env.PORT || 3000;
var server = connect(
    connect.static(__dirname + '/public')
).listen(port);

var data = [{nome: 'Guilherme Medeiros'}];

var io = socketio.listen(server);


io.sockets.on('connection', function(socket) {
    socket.emit('reset', data);
    socket.on('add', function(item){
        data.push(item);
        io.sockets.emit('add', item)
    })
});