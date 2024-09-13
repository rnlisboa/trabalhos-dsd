package br.dsd.filamensagens.controller;


import br.dsd.filamensagens.config.RabbitMQConfig;
import br.dsd.filamensagens.service.Produtor;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class RabbitMQController {

     @Autowired
     private Produtor produtor;

     private final List<String> messages = new ArrayList<>();

    @PostMapping("/send")
    public String sendMessage(@RequestParam(value = "message",
    required = false,
    defaultValue = "valeu pessoal") String message) {
        System.out.println("Mensagem enviada: " + message);
        return produtor.disparoAutomatico(message);
    }

    @RabbitListener(queues = RabbitMQConfig.QUEUE_NAME)
    public void receiveMessage(String message) {
        this.messages.add(message);
    }

    @GetMapping("/messages")
    public List<String> getMessages() {
        return messages;
    }

}
