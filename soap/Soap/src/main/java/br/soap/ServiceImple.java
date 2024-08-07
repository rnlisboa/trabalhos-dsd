package br.soap;

import jakarta.jws.WebService;

@WebService(endpointInterface = "br.soap.HelloInterface")
public class ServiceImple implements HelloInterface{
    @Override
    public String sayHello(String name) {
        return "O;la " + "!";
    }
}
