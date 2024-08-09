from zeep import Client

# URL do WSDL do serviço SOAP
wsdl = 'https://probable-space-barnacle-xg6x7prjvp6f965r-8081.app.github.dev/ws/hello?wsdl'

# Criando o cliente SOAP
client = Client(wsdl=wsdl)

def main():

    try:
        # Exibe a matriz inicial
        response = client.service.printMatriz()
        print(response)

        # Exibe as coordenadas possíveis
        # print(f"As possíveis coordenadas vão de {tamanho // 2} a -{tamanho // 2} para x e y.")
        
        # Solicita as coordenadas do robô
        y = int(input("Coordenada do eixo y: "))
        x = int(input("Coordenada do eixo x: "))
        
        # Insere o robô na matriz
        client.service.insertRobot(y, x)
        response = client.service.printMatriz()
        print(response)

    except Exception as e:
        print(e)

    while True:
        # Solicita o comando de movimento ao usuário
        comando = input("Qual direção deseja andar? (w: cima, s: baixo, a: esquerda, d: direita): ").strip().lower()
        if comando == 'w':
            client.service.moveUp()
        elif comando == 's':
            client.service.moveDown()
        elif comando == 'a':
            client.service.moveLeft()
        elif comando == 'd':
            client.service.moveRight()
        else:
            print("Comando inválido.")
            continue
        
        # Exibe a matriz após o movimento
        response = client.service.printMatriz()
        print(response)

if __name__ == "__main__":
    main()
