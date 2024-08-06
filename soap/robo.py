coordX = input('Informe a posição inicial X do robô no plano cartesiano: ').strip()
intX = int(coordX)
coordY = input('Informe a posição inicial Y do robô no plano cartesiano: ').strip()
intY = int(coordY)
string = (input('Informe uma palavra ou frase: ').lower()).strip()
if string == '' or coordX == '' or coordY == '':
    print('Input(s) inválido(s)')
else:
    cont = 0
    contCoord_U = 0
    contCoord_D = 0
    contCoord_R = 0
    contCoord_L = 0
    contCoord_O = 0
    contCoord_N = 0
    contCoord_E = 0
    contCoord_W = 0
    print('--------------')
    print(f'String informada: {string}')
    print(f'A posição inicial do robô foi: ({intX}, {intY})')
    if intX == 0 and intY == 0:
        print('O robô iniciou na origem do plano cartesiano na posição (0, 0).')
    elif intX > 0 and intY > 0:
        print(f'O robô iniciou no primeiro quadrante do plano cartesiano.')
    elif intX > 0 and intY < 0:
        print(f'O robô iniciou no quarto quadrante do plano cartesiano.')
    elif intX < 0 and intY < 0:
        print(f'O robô iniciou no terceiro quadrante do plano cartesiano.')
    elif intX < 0 and intY > 0:
        print(f'O robô iniciou no segundo quadrante do plano cartesiano.')

    while cont < len(string):
        #print(string[cont])
        if string[cont] == 'u':
            contCoord_U += 1
        if string[cont] == 'd':
            contCoord_D += 1
        if string[cont] == 'r':
            contCoord_R += 1
        if string[cont] == 'l':
            contCoord_L += 1
        if string[cont] == 'o':
            contCoord_O += 1
        if string[cont] == 'n':
            contCoord_N += 1
        if string[cont] == 'e':
            contCoord_E += 1
        if string[cont] == 'w':
            contCoord_W += 1
        cont+=1
    if contCoord_U > 0:
        up = intY + contCoord_U
        intY = up
    else:
        up = 0
        intY = up
    if contCoord_D > 0:
        down = intY - contCoord_D
        intY = down
    else:
        down = 0
        intY = down
    if contCoord_R > 0:
        right = intX + contCoord_R
        intX = right
    else:
        right = 0
        intX = right
    if contCoord_L > 0:
        left = intX - contCoord_L
        intX = left
    else:
        left = 0
        intX = left


    if contCoord_O > 0:
        if up == 0: 
            norte = intY + contCoord_O
        else:
            norte = up + contCoord_O
        if right == 0: 
            oeste = intX - contCoord_O
        else:
            oeste = right - contCoord_O
    else:
        norte = 0
        oeste = 0
    
    if contCoord_N > 0:
        if up == 0:
            norte = intY + contCoord_N 
        else:
            norte = up + contCoord_N
        if left == 0:
            leste = intX + contCoord_N
        else:
            leste = left + contCoord_N
    else:
        norte = 0
        leste = 0
    
    if contCoord_E > 0:
        if down == 0:
            sul = intY - contCoord_E
        else:
            sul = down - contCoord_E 
        if left == 0:
            leste = intX + contCoord_E
        else:
            leste = left + contCoord_E
    else:
        sul = 0
        leste = 0
    
    if contCoord_W > 0:
        if down == 0:
            sul = intY - contCoord_W
        else:
            sul = down - contCoord_W
        if right == 0:
            oeste = intX - contCoord_W
        else:
            oeste = right - contCoord_W
    else:
        oeste = 0
        sul = 0


    """POSIÇÃO FINAL"""
    xFinal = right + left + oeste + leste
    yFinal = up + down + sul + norte
    print(f'A posição final do robô é ({xFinal},{yFinal})')

    """MOVIMENTOS VÁLIDOS"""
    movValidos = contCoord_U + contCoord_D + contCoord_L + contCoord_R + contCoord_O + contCoord_N + contCoord_E + contCoord_W
    print(f'O robô executou {movValidos} movimento(s) válido(s)')
    print(f'O robô executou {contCoord_R} movimento(s) para a direita, {contCoord_L} para a esquerda, {contCoord_U} pra cima, {contCoord_D} pra baixo, {contCoord_O} para noroeste, {contCoord_N} para nordeste, {contCoord_E} para sudeste, {contCoord_W} para sudoeste.')



    """QUADRANTE"""
    if xFinal == 0 and yFinal == 0:
        print('O robô terminou na origem do plano cartesiano na posição (0, 0)')
    elif xFinal > 0 and yFinal > 0:
        print(f'O robô terminou no primeiro quadrante do plano cartesiano.')
    elif xFinal < 0 and yFinal > 0:
        print(f'O robô terminou no segundo quadrante do plano cartesiano.')
    elif xFinal < 0 and yFinal < 0:
        print(f'O robô terminou no terceiro quadrante do plano cartesiano.')
    elif xFinal > 0 and yFinal < 0:
        print(f'O robô terminou no quarto quadrante do plano cartesiano.')
    
