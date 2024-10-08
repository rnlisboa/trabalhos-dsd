package br.dsd.filamensagens.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Aplica a todos os endpoints
                        .allowedOriginPatterns("*")// Frontend React rodando na porta 3000
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("Accept", "Referer", "User-Agent", "Authorization", "X-Organizacao-ID",
			             "Organizacao-Id", "Origin", "X-Requested-With", "Content-Type", "Accept", "Sec-Fetch-Mode", "x-ijt",
			             "Content-Type")
                        .allowCredentials(true)
                        .maxAge(3600);
                                
                // registry.addMapping("/**") // Aplica a todos os endpoints
                //         .allowedOrigins("https://glowing-space-disco-9gg7jx5q74qhxwwj-3000.app.github.dev") // Frontend React rodando na porta 3000
                //         .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                //         .allowedHeaders("*")
                //         .allowCredentials(true);
            }
        };
    }
}
