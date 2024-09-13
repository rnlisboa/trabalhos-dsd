package br.dsd.filamensagens.service;

import br.dsd.filamensagens.config.RabbitMQConfig;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Produtor {

    @Autowired
    private RabbitTemplate rabbitTemplate;


    public String disparoAutomatico(String message) {
        rabbitTemplate.convertAndSend(RabbitMQConfig.QUEUE_NAME, message);
        return "Mensagem enviada com sucesso!";
    }
}
