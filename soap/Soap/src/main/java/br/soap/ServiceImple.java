package br.soap;

import jakarta.jws.WebService;

@WebService(endpointInterface = "br.soap.HelloInterface")
public class ServiceImple implements HelloInterface{
    @Override
    public String sayHello(String name) {
        return "O;la " + "!";
    }

    @Override
<<<<<<< Updated upstream
    public String informarQuadranteInicial(String frase, int coordX, int CoordY) {
        return "";
=======
    public String informarQuadranteInicial(String string, String coordX, String CoordY) {
        if (string.isEmpty() || coordX.isEmpty() || coordY.isEmpty()) {
            return "Input(s) inválido(s)";
        } else {
            StringBuilder resultado = new StringBuilder();
            int cont = 0;
            int contCoord_U = 0;
            int contCoord_D = 0;
            int contCoord_R = 0;
            int contCoord_L = 0;
            int contCoord_O = 0;
            int contCoord_N = 0;
            int contCoord_E = 0;
            int contCoord_W = 0;

            int intX = Integer.parseInt(coordX);
            int intY = Integer.parseInt(coordY);

            resultado.append("--------------\n");
            resultado.append("String informada: ").append(string).append("\n");
            resultado.append("A posição inicial do robô foi: (").append(intX).append(", ").append(intY).append(")\n");

            if (intX == 0 && intY == 0) {
                resultado.append("O robô iniciou na origem do plano cartesiano na posição (0, 0).\n");
            } else if (intX > 0 && intY > 0) {
                resultado.append("O robô iniciou no primeiro quadrante do plano cartesiano.\n");
            } else if (intX > 0 && intY < 0) {
                resultado.append("O robô iniciou no quarto quadrante do plano cartesiano.\n");
            } else if (intX < 0 && intY < 0) {
                resultado.append("O robô iniciou no terceiro quadrante do plano cartesiano.\n");
            } else if (intX < 0 && intY > 0) {
                resultado.append("O robô iniciou no segundo quadrante do plano cartesiano.\n");
            }

            return resultado.toString();
        }
>>>>>>> Stashed changes
    }
}
