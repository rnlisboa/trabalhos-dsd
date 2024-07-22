import Pyro4

def main():
    musicas = Pyro4.Proxy("PYRONAME:musicas")  # Cria um proxy para o objeto remoto
    while True:
        print("1. Listar músicas")
        print("2. Tocar música")
        print("3. Sair")
        escolha = input("Escolha uma opção: ")

        if escolha == '1':
            playlist = musicas.listar_musicas()
            for i in playlist:
                print(f"{i}. {playlist[i]}")

        elif escolha == '2':
            musica_id = int(input("Digite o ID da música que deseja tocar: "))
            resultado = musicas.tocar_musica(musica_id)
            print(resultado)

        elif escolha == '3':
            break

        else:
            print("Opção inválida.")

if __name__ == "__main__":
    main()
