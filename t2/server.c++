// C++ program to show the example of server application in 
// socket programming 
#include <cstring> 
#include <iostream> 
#include <netinet/in.h> 
#include <sys/socket.h> 
#include <unistd.h> 
#define PORT 8080
using namespace std; 

class Server {
    private:
        int serverSocket;
        sockaddr_in serverAddress;
    
    public: 
        Server(){
            this->serverSocket = socket(AF_INET, SOCK_STREAM, 0);
            this->serverAddress.sin_family = AF_INET;
            serverAddress.sin_port = htons(PORT);
            serverAddress.sin_addr.s_addr = INADDR_ANY;
        }

    public:
        void configureServer(){
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

            cout << "Message from client: " << buffer << endl;
        }

};

int main() 
{ 
	
	// closing the socket. 
	//close(serverSocket); 

	return 0; 
}
