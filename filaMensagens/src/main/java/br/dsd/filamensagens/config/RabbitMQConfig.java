package br.dsd.filamensagens.config;

import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



@Configuration
public class RabbitMQConfig {

    public static final String QUEUE_NAME = "simple_queue";

    @Bean
    public Queue simpleQueue() {
        return new Queue(QUEUE_NAME, false);
    }
}
