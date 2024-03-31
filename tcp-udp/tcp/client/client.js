var net = require('net');
const fs = require('fs');

var client = new net.Socket();

client.connect(3333, '127.0.0.1', function () {
    console.log('Connected');
});

client.on('data', function (data) {
    const flag = data.toString('utf8')[0]; 
    console.log(flag)
    if (flag === '0') {
        console.log('Received: ' + data.slice(2).toString('utf8'));
    
    } else if(flag === '2'){
        const content = data.slice(2);
        fs.writeFile('./arquivo.txt', content, (err) => {
            if (err) throw err;
            console.log('O arquivo foi criado!');
        });
    }else if (flag === '1') {
        const imageData = data.slice(2); 
        fs.writeFile('./imagem.jpg', imageData, (err) => {
            if (err) throw err;
            console.log('A imagem foi salva como imagem.jpg');
        });
    }
});

process.stdin.on('data', function (input) {
    input = input.toString().trim();
    client.write(input);
});

client.on('close', function () {
    console.log('Connection closed');
});
