#include <cstring> 
#include <iostream> 
#include <netinet/in.h> 
#include <sys/socket.h> 
#include <unistd.h> 
#include <arpa/inet.h>
#define PORT 8080
using namespace std; 

class ServerTCP {
    private:
        int serverSocket;
        sockaddr_in serverAddress;
    
    public: 
        ServerTCP(){
            this->serverSocket = socket(AF_INET, SOCK_STREAM, 0);
            this->serverAddress.sin_family = AF_INET;
            serverAddress.sin_port = htons(PORT);
            serverAddress.sin_addr.s_addr = INADDR_ANY;
        }

    public:
        void configureServerTCP(){
            bind(serverSocket, (struct sockaddr*)&serverAddress, sizeof(serverAddress));
            listen(serverSocket, 5);
        }

    private:
        int clientSocket(){
            return accept(serverSocket, nullptr, nullptr);
        }


    public:
        void receiveData(){
            char buffer[1024] = { 0 };
            int clientSocket = this->clientSocket();
            recv(clientSocket, buffer, sizeof(buffer), 0);

            struct sockaddr_in clientAddr;
            socklen_t addrLen = sizeof(clientAddr);
            getpeername(clientSocket, (struct sockaddr*)&clientAddr, &addrLen);
            char clientIP[INET_ADDRSTRLEN];
            inet_ntop(AF_INET, &(clientAddr.sin_addr), clientIP, INET_ADDRSTRLEN);

            cout << "IP do cliente: " << clientIP << endl;
            cout << "Mensagem do cliente: " << buffer << endl;
        }

    public:
        void closeServer(){
            close(this->serverSocket);
        }
};

int main() { 
    ServerTCP server;    
    server.configureServerTCP();
    server.receiveData();
    server.closeServer();

	return 0; 
}
