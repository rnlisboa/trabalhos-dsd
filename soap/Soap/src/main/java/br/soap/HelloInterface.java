package br.soap;

import jakarta.jws.WebMethod;
import jakarta.jws.WebService;

@WebService
public interface HelloInterface {
    @WebMethod
    String sayHello(String name);
}