var net = require('net');
process.stdin.setEncoding('utf8');

var client = new net.Socket();

// Conectar ao servidor
client.connect(3333, '127.0.0.1', function () {
    console.log('Connected');
});

// Resposta do servidor 
client.on('data', function (data) {
    console.log('Received: ' + data);
});



process.stdin.on('data', function (input) {
    input = input.trim();
    client.write(input);
});

client.on('close', function () {
    console.log('Connection closed');
});