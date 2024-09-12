const WebSocket = require("ws");

const coordinates = [
    [-35.223204, -5.811374],
    [-35.223309, -5.811687],
    [-35.223105, -5.811995],
    [-35.223208, -5.812235],
    [-35.225957, -5.811236],
    [-35.224946, -5.808496],
    [-35.2071, -5.815047],
    [-35.205985, -5.815336],
    [-35.204044, -5.810092],
    [-35.202569, -5.810675]
];

let index = 0;
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (ws) => {
    console.log("New client connected!");

    ws.send("Welcome to the WebSocket server!");

    // Enviar coordenadas periodicamente
    const interval = setInterval(() => {
        if (index >= coordinates.length) {
            index = 0; // Reiniciar a lista de coordenadas quando atingir o final
        }
        const currentCoordinate = coordinates[index++];
        ws.send(JSON.stringify({ latitude: currentCoordinate[1], longitude: currentCoordinate[0] }));
    }, 1000);

    // Limpar o intervalo quando o cliente se desconectar
    ws.on("close", () => {
        clearInterval(interval);
        console.log("Client disconnected");
    });

    ws.on("message", (message) => {
        console.log("Received: ", message);
        ws.send(`Your message: ${message}`);
    });
});
