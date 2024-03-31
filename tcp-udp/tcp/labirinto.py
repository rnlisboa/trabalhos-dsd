"0 0 0 0 0 0 1 0 1 0 1 1 0 0 1 0 0 0"
labirinto = [
    [10,10,0,0,0,0],
    [1,10,1,0,1,1],
    [10,10,1,0,0,0]
]

# x,y --> x: posicaoLinha, y: posicaoColuna
def labirinto_bt(labirinto, qtd_linha, qtd_coluna, x, y):
    if(x == qtd_linha or y == qtd_coluna or labirinto[x][y] == 1 or x == -1 or y == -1): return 0
    # desce
    if(labirinto[x][y] == 10): return 0

    labirinto[x][y] = 10
    ans = labirinto_bt(labirinto, qtd_linha, qtd_coluna, x-1, y)
    if(ans == 0): 
        ans = labirinto_bt(labirinto, qtd_linha, qtd_coluna, x+1, y)
    if(ans == 0): 
        ans = labirinto_bt(labirinto, qtd_linha, qtd_coluna, x, y-1)
    if(ans == 0): 
        ans = labirinto_bt(labirinto, qtd_linha, qtd_coluna, x, y+1)
    ans = True
    return ans

tem_saida = labirinto_bt(labirinto,2,5,0,0)
print(tem_saida)