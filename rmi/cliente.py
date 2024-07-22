import Pyro4
from datetime import datetime

def main():
    lista_tarefas = Pyro4.Proxy("PYRONAME:lista_tarefas")

    while True:
        print("1. Adicionar tarefa")
        print("2. Listar tarefas")
        print("3. Remover tarefa")
        print("4. Sair")
        escolha = input("Escolha uma opção: ")

        if escolha == '1':
            usuario = input("Digite o nome do usuário: ")
            descricao = input("Digite a descrição da tarefa: ")
            while True:
                data_str = input("Digite a data e hora da tarefa (YYYY-MM-DD HH:MM): ")
                try:
                    data_hora = datetime.strptime(data_str, "%Y-%m-%d %H:%M")
                    break
                except ValueError:
                    print("Formato de data e hora inválido. Por favor, use o formato YYYY-MM-DD HH:MM.")
            resultado = lista_tarefas.adicionar_tarefa(usuario, descricao, data_hora)
            print(resultado)

        elif escolha == '2':
            tarefas = lista_tarefas.listar_tarefas()
            for tarefa in tarefas:
                print(tarefa)

        elif escolha == '3':
            usuario = input("Digite o nome do usuário: ")
            descricao = input("Digite a descrição da tarefa a ser removida: ")
            resultado = lista_tarefas.remover_tarefa(usuario, descricao)
            print(resultado)

        elif escolha == '4':
            break

        else:
            print("Opção inválida.")

if __name__ == "__main__":
    main()