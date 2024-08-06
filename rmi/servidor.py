import Pyro4
from lista_tarefas import ListaTarefas
def main():
    HOST = '10.25.2.199'
    daemon = Pyro4.Daemon(host=HOST)
    uri = daemon.register(ListaTarefas)
    print(uri)

    print("Servidor pronto.")
    daemon.requestLoop()

if __name__ == "__main__":
    main()



