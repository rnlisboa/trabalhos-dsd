from zeep import Client

HOST = 'localhost'
ENDPOINT = 'endpoint'

client = Client(f'http://localhost:8081/ws/hello')
result = client.service.printMatriz()
print(result)
