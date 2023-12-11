package ifpb.com.br.gestor_de_anuncio.config;


import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EmailConfig {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}