package br.soap;

import jakarta.xml.ws.Endpoint;

public class Publisher {
    public static void main(String[] args) {
<<<<<<< Updated upstream
       Endpoint.publish("http://localhost:8080/ws/hello", new ServiceImple());
=======
       Endpoint.publish("http://localhost:8081/ws/hello", new ServiceImple());
>>>>>>> Stashed changes
    }
}
