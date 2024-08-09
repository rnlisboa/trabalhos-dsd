from zeep import Client

# URL do WSDL do serviço SOAP
wsdl = 'https://probable-space-barnacle-xg6x7prjvp6f965r-8081.app.github.dev/ws/hello?wsdl'

# Criando o cliente SOAP
client = Client(wsdl=wsdl)

def main():
    # Solicita o tamanho da matriz ao usuário
    tamanho = int(input("Informe o tamanho do plano cartesiano NxN: "))

    # Se o tamanho for par, incrementa em 1 para torná-lo ímpar
    if tamanho % 2 == 0:
        tamanho += 1

    # Chama o método criaMatriz do serviço SOAP
    client.service.criaMatriz(tamanho)

    # Calcula a quantidade de bombas
    quantidade_bombas = (tamanho // 2) * (tamanho // 2)
    client.service.adicionaBombas(quantidade_bombas, tamanho)

    

if __name__ == "__main__":
    main()
