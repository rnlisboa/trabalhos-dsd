#include <stdio.h>



//parametros:   labirinto,             qtd linhas, qtd colunas, pos Atual X e Y
int labirinto_bt(int labirinto[20][20], int linha, int coluna, int x, int y){
    if(x==-1 || y == -1 || x == linha || y == coluna || labirinto[y][x] != 0) return 0;

    int ans = labirinto_bt(labirinto, linha, coluna, x, y+1);
    if(ans == 0) labirinto_bt(labirinto, linha, coluna, x + 1, y);
    
    return 1;
}

int main(){
    int linha, coluna, labirinto[20][20];
    scanf("%d %d", &linha, &coluna);
    for (int i = 0; i < linha; ++i)
        for (int j = 0; j < coluna; ++j)
            scanf("%d", &labirinto[i][j]);
    int saida = labirinto_bt(labirinto, linha, coluna, 0, 0);
    printf("%d\n", saida);

    return 0;
}