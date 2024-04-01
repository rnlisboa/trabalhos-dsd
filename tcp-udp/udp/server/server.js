const dgram = require('dgram');

const porta = 4030;
const mensagem = Buffer.from('Resposta...');

const soquete = dgram.createSocket('udp4');

soquete.on('listening', () => {
    const address = soquete.address();
    console.log(`Ouvindo em ${address.address}:${address.port}`);
});

soquete.on('message', (buffer, remote) => {
    console.log(`Mensagem recebida de ${remote.address}:${remote.port}: ${buffer.toString()}`);

    soquete.send(mensagem, 0, mensagem.length, remote.port, remote.address, (err) => {
        if (err) {
            console.error('Erro ao enviar a resposta:', err);
        } else {
            console.log('Resposta enviada com sucesso!');
        }
    });
});

soquete.on('error', (err) => {
    console.error('Erro no soquete:', err);
    soquete.close();
});

soquete.bind(porta);