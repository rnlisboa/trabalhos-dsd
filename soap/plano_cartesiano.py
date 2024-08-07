import os
import time

class Matriz:
    def __init__(self):
        self.matriz = []
        self.y = 0
        self.x = 0


    def cria_matriz(self, t: int) -> list:
        eixo = t // 2

        for i in range(t):
            linha = []
            for j in range(t):
                if i == eixo and j == eixo:
                    linha.append('*')
                elif j == eixo:
                    linha.append('|')
                elif i == eixo:
                    linha.append('-')
                else:
                    linha.append('.')
            self.matriz.append(linha)
        return self.matriz

    def print_matriz(self) -> None:
        os.system('cls' if os.name == 'nt' else 'clear')
        for linha in self.matriz:
            print(' '.join(linha))
        time.sleep(0.5) 

    def get_index(self, x: int, y: int) -> tuple:
        if y > 0:
            y = -1 * y
        if x < 0:
            x = -1 * x
        return x, y

    def insert_robot(self, eixo_y: int, eixo_x: int) -> None:
        t = len(self.matriz)
        if eixo_y >= t or eixo_x >= t:
            raise Exception('Coordenadas devem ultrapassar os limites.') 
        
        eixo = t // 2
        self.y = eixo - eixo_y
        self.x = eixo - (-eixo_x)
        self.matriz[eixo - eixo_y][eixo - (-eixo_x)] = 'O'

    def move_down(self):
        self.matriz[self.y][self.x] = '*'
        self.y += 1
        self.matriz[self.y][self.x] = 'O'
    
    def move_up(self):
        self.matriz[self.y][self.x] = '*'
        self.y -= 1
        self.matriz[self.y][self.x] = 'O'
    
    def move_left(self):
        self.matriz[self.y][self.x] = '*'
        self.x -= 1
        self.matriz[self.y][self.x] = 'O'
    
    def move_right(self):
        self.matriz[self.y][self.x] = '*'
        self.x += 1
        self.matriz[self.y][self.x] = 'O'

matriz = Matriz()

t = int(input('Informe o tamanho do plano cartesiano NxN: '))

if t % 2 == 0: t = t +1

matriz.cria_matriz(t)

try:
    matriz.print_matriz()

    print(f"As possíveis coordenadas vão de {t//2} a -{t//2} para x e {t//2} a -{t//2} para y \1")
    print()
    y = int(input("Coordenada do eixo y: "))
    x = int(input("Coordenada do eixo x: "))
    

    matriz.insert_robot(y, x)
    matriz.print_matriz()

except Exception as e:
        print(e)

while True:
    print("w: cima\ns: baixo \na: esquerda \nd: direita")
    comando = input('Qual direção deseja andar? ')
    if comando == 'w':
        matriz.move_up()
    elif comando == 's':
        matriz.move_down()
    elif comando == 'a':
        matriz.move_left()
    elif comando == 'd':
        matriz.move_right()
    else: 
        print('Comando inválido.')
    
    matriz.print_matriz()
