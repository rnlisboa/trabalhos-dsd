import Pyro4
from lista_tarefas import ListaTarefas

def main():
    daemon = Pyro4.Daemon()
    ns = Pyro4.locateNS()
    uri = daemon.register(ListaTarefas)
    ns.register("lista_tarefas", uri)

    print("Servidor pronto.")
    daemon.requestLoop()

if __name__ == "__main__":
    main()



