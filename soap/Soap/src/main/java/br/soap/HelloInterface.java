package br.soap;


import javax.xml.ws.WebFault;

@WebFault
public interface HelloInterface {
    
    String sayHello(String name);
}
