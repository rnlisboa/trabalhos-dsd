package br.soap;

import jakarta.jws.WebMethod;
import jakarta.jws.WebService;

@WebService
public interface HelloInterface {
    @WebMethod
    String sayHello(String name);

    @WebMethod
<<<<<<< Updated upstream
    String informarQuadranteInicial(String frase,int coordX, int CoordY);
=======
    String informarQuadranteInicial(String frase,String coordX, String CoordY);
>>>>>>> Stashed changes
}
