var net = require('net');

var listarArquivos = require("./util")

var server = net.createServer(function (socket) {
    console.log('Cliente conectado');

    socket.write("Bem vindo ao servidor.\nComandos:\n- /l - Listar arquivos do diretório.\n- /b - Baixar arquivo\r\n");

    socket.on('data', function (data) {
        const comando = data.toString();
        if (comando === '/l') {
            console.log('Comando recebido:', comando);
            socket.write("Listando os arquivos...\r\n");
            listarArquivos(function (arquivos) {
                arquivos.forEach(function (arquivo) {
                    socket.write(arquivo + '\n');
                });
                socket.write('\r\n');
            });
        }

        if (comando === '/b') {
            console.log('Comando recebido:', comando);
            socket.write('Selecione o arquivo que deseja baixar: \n');
            listarArquivos(function (arquivos) {
				let arq = arquivos.join('\n')
                
                socket.write(`\n${arq}\r\n`);
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
