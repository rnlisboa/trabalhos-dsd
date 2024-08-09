package br.soap;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import jakarta.jws.WebService;

@WebService(endpointInterface = "br.soap.PlanoCartesianoInterface")
public class PlanoCartesianoImple implements PlanoCartesianoInterface{

    private char[][] matriz;
    private List<int[]> bombas;
    private int y;
    private int x;

    
    
    public PlanoCartesianoImple() {
        this.matriz = new char[0][0];
        this.bombas = new ArrayList<>();
        this.y = 0;
        this.x = 0;
    }

    @Override
    public String sayHello(String name) {
        return "O;la " + "!";
    }

    @Override
    public char[][] criaMatriz(int t) {
        System.out.println("Iniciou-se o plano cartesiano.");
        int eixo = t / 2;
        this.matriz = new char[t][t];

        for (int i = 0; i < t; i++) {
            for (int j = 0; j < t; j++) {
                if (i == eixo && j == eixo) {
                    matriz[i][j] = '*';
                } else if (j == eixo) {
                    matriz[i][j] = '|';
                } else if (i == eixo) {
                    matriz[i][j] = '-';
                } else {
                    matriz[i][j] = '.';
                }
            }
        }
        return matriz;
    }

    @Override
    public void printMatriz() {
        System.out.print("\033[H\033[2J");
        System.out.flush();

        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] == '*') {
                    System.out.print("\033[31m" + matriz[i][j] + "\033[0m ");
                } else if (matriz[i][j] == 'O') {
                    System.out.print("\033[32m" + matriz[i][j] + "\033[0m ");
                } else {
                    System.out.print(matriz[i][j] + " ");
                }
            }
            System.out.println();
        }
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }

    @Override
    public void adicionaBombas(int quantidade, int tamanho) {
        Random random = new Random();
        int eixo = tamanho / 2;

        for (int i = 0; i < quantidade; i++) {
            int x, y;
            do {
                x = random.nextInt(tamanho) - eixo;
                y = random.nextInt(tamanho) - eixo;
            } while (matriz[eixo - y][eixo - (-x)] == 'B');
            bombas.add(new int[]{eixo - y, eixo - (-x)});
        }
    }

    @Override
    public void insertRobot(int eixoY, int eixoX) throws Exception {
        int t = matriz.length;
        if (eixoY >= t || eixoX >= t) {
            throw new Exception("As coordenadas não devem ultrapassar os limites.");
        }

        int eixo = t / 2;
        this.y = eixo - eixoY;
        this.x = eixo - (-eixoX);
        matriz[eixo - eixoY][eixo - (-eixoX)] = 'O';
    }

    @Override
    public void moveDown() {
        moveRobot(y + 1, x);
    }

    @Override
    public void moveUp() {
        moveRobot(y - 1, x);
    }

    @Override
    public void moveLeft() {
        moveRobot(y, x - 1);
    }

    @Override
    public void moveRight() {
        moveRobot(y, x + 1);
    }

    private void moveRobot(int newY, int newX) {
        if (newY >= 0 && newY < matriz.length && newX >= 0 && newX < matriz[0].length) {
            matriz[y][x] = '*';
            y = newY;
            x = newX;

            for (int[] bomba : bombas) {
                if (bomba[0] == y && bomba[1] == x) {
                    matriz[y][x] = 'B';
                    System.out.println("Você encontrou uma bomba!");
                    printMatriz();
                    System.exit(0);
                }
            }

            matriz[y][x] = 'O';
        }
    }


}
