const dgram = require('dgram');

const mensagem = Buffer.from('SOLICITACAO DO CLIENTE');
const porta = 4030;
const enderecoServidor = 'localhost';

const cliente = dgram.createSocket('udp4');

cliente.send(mensagem, porta, enderecoServidor, (err) => {
    if (err) {
        console.error('Erro ao enviar mensagem:', err);
        cliente.close();
    } else {
        console.log('Mensagem enviada com sucesso.');
    }
});

cliente.on('message', (mensagem, info) => {
    console.log('Mensagem recebida do servidor:', mensagem.toString());
    console.log('Informações do servidor:', info);
    cliente.close();
});

cliente.on('error', (err) => {
    console.error('Erro no cliente:', err);
    cliente.close();
});