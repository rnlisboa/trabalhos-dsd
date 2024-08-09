from zeep import Client

# URL do WSDL do serviço SOAP
wsdl = 'https://stunning-train-gvv47pr5qgxcg96-8081.app.github.dev/ws/hello?wsdl'

# Criando o cliente SOAP
client = Client(wsdl=wsdl)

# Parâmetro a ser passado para o método criaMatriz
tamanho = 5  # Exemplo de valor

# Chama o método criaMatriz do serviço SOAP
response = client.service.criaMatriz(tamanho)

# Exibe a resposta
print(response)