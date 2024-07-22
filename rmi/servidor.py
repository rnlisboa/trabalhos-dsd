import Pyro4
from musicas import Musicas

def main():
    daemon = Pyro4.Daemon()              # Cria um Daemon Pyro
    ns = Pyro4.locateNS()                # Localiza o servidor de nomes Pyro
    uri = daemon.register(Musicas)       # Registra o objeto Musicas como um objeto Pyro
    ns.register("musicas", uri)          # Registra o objeto com o servidor de nomes

    print("Servidor pronto.")
    daemon.requestLoop()  # Entra no loop de atendimento de requisições

if __name__ == "__main__":
    main()
