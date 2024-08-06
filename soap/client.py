from zeep import Client

HOST = 'localhost'
ENDPOINT = 'endpoint'

client = Client(f'https://{HOST}/{ENDPOINT}')
result = client.service.GetUser(123) # request user with ID 123

name = result['Username']