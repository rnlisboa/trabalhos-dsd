package br.soap;

public class Publisher {
    public static void main(String[] args) {
        javax.xml.ws.Endpoint.publish("http://localhost:8080/hello", new ServiceImple());
    }
}
