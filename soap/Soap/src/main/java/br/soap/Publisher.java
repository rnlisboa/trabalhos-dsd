package br.soap;

import jakarta.xml.ws.Endpoint;

public class Publisher {
    public static void main(String[] args) {
       PlanoCartesianoImple planoCartesianoImple = new PlanoCartesianoImple();
       Endpoint.publish("http://localhost:8081/ws/hello", planoCartesianoImple);
    }
}
