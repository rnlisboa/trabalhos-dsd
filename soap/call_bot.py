from zeep import Client


wsdl = 'https://probable-space-barnacle-xg6x7prjvp6f965r-8081.app.github.dev/ws/hello?wsdl'


client = Client(wsdl=wsdl)

def main():
    
    tamanho = int(input("Informe o tamanho do plano cartesiano NxN: "))

  
    if tamanho % 2 == 0:
        tamanho += 1
   
    client.service.criaMatriz(tamanho)

    quantidade_bombas = (tamanho // 2) * (tamanho // 2)
    client.service.adicionaBombas(quantidade_bombas, tamanho)

    

if __name__ == "__main__":
    main()
