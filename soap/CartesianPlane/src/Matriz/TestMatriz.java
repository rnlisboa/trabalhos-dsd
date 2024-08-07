package Matriz;

import java.util.Scanner;

public class TestMatriz {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            Matriz matriz = new Matriz();

            System.out.print("Informe o tamanho do plano cartesiano NxN: ");
            int t = scanner.nextInt();

            if (t % 2 == 0)
                t = t + 1;

            matriz.criaMatriz(t);

            int quantidadeBombas = (t / 2) * (t / 2);
            matriz.adicionaBombas(quantidadeBombas, t);

            try {
                matriz.printMatriz();

                System.out.printf("As possíveis coordenadas vão de %d a -%d para x e %d a -%d para y\n", t / 2, t / 2,
                        t / 2, t / 2);
                System.out.println();
                System.out.print("Coordenada do eixo y: ");
                int y = scanner.nextInt();
                System.out.print("Coordenada do eixo x: ");
                int x = scanner.nextInt();

                matriz.insertRobot(y, x);
                matriz.printMatriz();

            } catch (Exception e) {
                System.out.println(e.getMessage());
            }

            while (true) {
                System.out.println("w: cima\ns: baixo \na: esquerda \nd: direita");
                System.out.print("Qual direção deseja andar? ");
                char comando = scanner.next().charAt(0);
                switch (comando) {
                    case 'w':
                        matriz.moveUp();
                        break;
                    case 's':
                        matriz.moveDown();
                        break;
                    case 'a':
                        matriz.moveLeft();
                        break;
                    case 'd':
                        matriz.moveRight();
                        break;
                    default:
                        System.out.println("Comando inválido.");
                }

                matriz.printMatriz();
            }
        }
    }
}
