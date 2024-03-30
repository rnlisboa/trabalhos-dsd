// Código de exemplo do servidor

#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <string>
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>

void listFiles(const std::string& directory, std::vector<std::string>& files) {
    // Implementação para listar arquivos em um diretório
    // Pode usar bibliotecas como dirent.h ou filesystem (C++17)
}

int main() {
    // Criar socket TCP
    int serverSocket = socket(AF_INET, SOCK_STREAM, 0);
    if (serverSocket == -1) {
        std::cerr << "Erro ao criar socket." << std::endl;
        return -1;
    }

    // Configurar endereço do servidor
    sockaddr_in serverAddr;
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_port = htons(8080); // Porta arbitrária
    serverAddr.sin_addr.s_addr = INADDR_ANY;

    // Vincular socket ao endereço e porta
    if (bind(serverSocket, (sockaddr*)&serverAddr, sizeof(serverAddr)) == -1) {
        std::cerr << "Erro ao vincular socket." << std::endl;
        return -1;
    }

    // Ouvir por conexões
    if (listen(serverSocket, 5) == -1) {
        std::cerr << "Erro ao ouvir por conexões." << std::endl;
        return -1;
    }

    // Loop principal
    while (true) {
        // Aceitar conexões de clientes
        int clientSocket = accept(serverSocket, nullptr, nullptr);
        if (clientSocket == -1) {
            std::cerr << "Erro ao aceitar conexão." << std::endl;
            continue;
        }

        // Receber solicitação do cliente

        // Enviar lista de arquivos ao cliente

        // Transferir arquivo solicitado ao cliente

        // Fechar conexão com cliente
        close(clientSocket);
    }

    // Fechar socket do servidor
    close(serverSocket);

    return 0;
}
