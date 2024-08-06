var net = require('net');
const fs = require('fs');
const listarArquivos = require('./listarArquivos.js');

var server = net.createServer(function (socket) {
    console.log('Cliente conectado');

    socket.write("0:Bem vindo ao servidor.\nentradas:\n- /l - Listar arquivos do diretório.\n- /b - Baixar arquivo\r\n");

    socket.on('data', function (data) {
        const entrada = data.toString('utf8');
        if (entrada === '/l') {
            console.log('entrada recebida:', entrada);
            socket.write("0:Listando os arquivos...\r\n");
            listarArquivos(function (arquivos) {
                let arq = arquivos.join('\n')
                socket.write(`0:\n${arq}\r\n`);
            });
        } else if (entrada === '/b') {
            console.log('entrada recebida:', entrada);
            socket.write('0:Selecione o arquivo que deseja baixar: \n');
        } else {
			console.log(entrada)
			const caminhoDiretorio = "./arquivos/";

            const filePath = caminhoDiretorio + entrada;
            fs.readFile(filePath, (err, fileData) => {
                if (err) {
                    console.error('Erro ao ler o arquivo:', err);
                    socket.write("0:Arquivo não encontrado\r\n");
                    return;
                }
				
                const isImage = /\.(png|jpe?g|gif|bmp)$/i.test(filePath);
                const flag = isImage ? '1' : '2';
                const message = Buffer.concat([Buffer.from(flag + ':'), fileData]);
                socket.write(message);
            });
        }
    });

    socket.on('error', function (err) {
        console.error('Erro no socket:', err.message);
    });

    socket.on('close', function () {
        console.log('Conexão fechada pelo cliente');
    });
});

server.listen(3333, '127.0.0.1', () => {
    console.log("Servidor funcionando na porta 3333");
});
