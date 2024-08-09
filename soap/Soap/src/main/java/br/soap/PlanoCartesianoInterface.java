package br.soap;

import jakarta.jws.WebMethod;
import jakarta.jws.WebService;

@WebService
public interface PlanoCartesianoInterface {
    @WebMethod
    String sayHello(String name);

    @WebMethod
    char[][] criaMatriz(int t);

    @WebMethod
    void printMatriz();

    @WebMethod
    void adicionaBombas(int quantidade, int tamanho);

    @WebMethod
    void insertRobot(int eixoY, int eixoX) throws Exception;

    @WebMethod
    void moveDown();

    @WebMethod
    void moveUp();

    @WebMethod
    void moveLeft();

    @WebMethod
    void moveRight();
}
