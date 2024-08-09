package br.soap;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import jakarta.jws.WebService;

@WebService(endpointInterface = "br.soap.PlanoCartesianoInterface")
public class PlanoCartesianoImple implements PlanoCartesianoInterface{

    private char[][] matriz;
    private Map<String, int[]> robos;
    private List<int[]> bombas;

    public PlanoCartesianoImple() {
        this.matriz = new char[0][0];
        this.robos = new HashMap<>();
        this.bombas = new ArrayList<>();
    }

    @Override
    public String sayHello(String name) {
        return "Olá " + name + "!";
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
                char display = matriz[i][j];
                for (int[] posicaoRobo : robos.values()) {
                    if (posicaoRobo[0] == i && posicaoRobo[1] == j) {
                        display = 'O';
                    }
                }
                if (display == '*') {
                    System.out.print("\033[31m" + display + "\033[0m ");
                } else if (display == 'O') {
                    System.out.print("\033[32m" + display + "\033[0m ");
                } else {
                    System.out.print(display + " ");
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
    public void insertRobot(String id, int eixoY, int eixoX) throws Exception {
        int t = matriz.length;
        if (eixoY >= t || eixoX >= t) {
            throw new Exception("As coordenadas não devem ultrapassar os limites.");
        }

        int eixo = t / 2;
        int[] posicaoRobo = new int[]{eixo - eixoY, eixo - (-eixoX)};
        robos.put(id, posicaoRobo);
    }

    @Override
    public void moveDown(String id) {
        moveRobot(id, robos.get(id)[0] + 1, robos.get(id)[1]);
    }

    @Override
    public void moveUp(String id) {
        moveRobot(id, robos.get(id)[0] - 1, robos.get(id)[1]);
    }

    @Override
    public void moveLeft(String id) {
        moveRobot(id, robos.get(id)[0], robos.get(id)[1] - 1);
    }

    @Override
    public void moveRight(String id) {
        moveRobot(id, robos.get(id)[0], robos.get(id)[1] + 1);
    }

    private void moveRobot(String id, int newY, int newX) {
        if (newY >= 0 && newY < matriz.length && newX >= 0 && newX < matriz[0].length) {
            for (int[] bomba : bombas) {
                if (bomba[0] == newY && bomba[1] == newX) {
                    System.out.println("Você encontrou uma bomba!");
                    printMatriz();
                    System.exit(0);
                }
            }

            robos.put(id, new int[]{newY, newX});
        }
    }
}
