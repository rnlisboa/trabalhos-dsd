var net = require('net');

var listarArquivos = require("./listarArquivos")

const caminhoDiretorio = "./arquivos/"

var server = net.createServer(function (socket) {
	console.log('Cliente conectado');

	socket.write("Bem vindo ao servidor.\nentradas:\n- /l - Listar arquivos do diretório.\n- /b - Baixar arquivo\r\n");

	socket.on('data', function (data) {
		const entrada = data.toString();
		if (entrada === '/l') {
			console.log('entrada recebido:', entrada);
			socket.write("Listando os arquivos...\r\n");
			listarArquivos(function (arquivos) {
				let arq = arquivos.join('\n')

				socket.write(`\n${arq}\r\n`);
			});
		} else if (entrada === '/b') {
			console.log('entrada recebido:', entrada);
			socket.write('Selecione o arquivo que deseja baixar: \n');
		} else {
			listarArquivos(function (arquivos) {
				if (arquivos.indexOf(entrada) == -1){
					socket.write("Arquivo não encontrado\r\n");
				} else {
					socket.write(`${caminhoDiretorio}${entrada}`)
				}
			})
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
