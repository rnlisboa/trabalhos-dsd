from zeep import Client
import uuid


wsdl = 'https://probable-space-barnacle-xg6x7prjvp6f965r-8081.app.github.dev/ws/hello?wsdl'


client = Client(wsdl=wsdl)

def main():
    robo_id = str(uuid.uuid4()) 

    try:
      
        response = client.service.printMatriz()
        print(response)
        
       
        y = int(input("Coordenada do eixo y: "))
        x = int(input("Coordenada do eixo x: "))
        
      
        client.service.insertRobot(robo_id, y, x)
        response = client.service.printMatriz()
        print(response)

    except Exception as e:
        print(e)

    while True:
     
        comando = input("Qual direção deseja andar? (w: cima, s: baixo, a: esquerda, d: direita): ").strip().lower()
        if comando == 'w':
            client.service.moveUp(robo_id)
        elif comando == 's':
            client.service.moveDown(robo_id)
        elif comando == 'a':
            client.service.moveLeft(robo_id)
        elif comando == 'd':
            client.service.moveRight(robo_id)
        else:
            print("Comando inválido.")
            continue
        
   
        response = client.service.printMatriz()
        print(response)

if __name__ == "__main__":
    main()
