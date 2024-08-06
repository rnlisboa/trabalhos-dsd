package br.soap;

import javax.jws.WebService;

@WebService(endpointInterface = "br.soap.HelloInterface")
public class ServiceImple implements HelloInterface{
    @Override
    public String sayHello(String name) {
        return "O;la " + name + "!";
    }
}
