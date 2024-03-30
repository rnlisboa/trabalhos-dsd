var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(3333, '127.0.0.1', ()=>{
    console.log("Servidor funcionando na porta 3333")
});


