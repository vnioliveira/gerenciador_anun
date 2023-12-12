package ifpb.com.br.gestor_de_anuncio;

import ifpb.com.br.gestor_de_anuncio.domain.Pessoa;
import ifpb.com.br.gestor_de_anuncio.service.PessoaService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GestorDeAnuncioApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestorDeAnuncioApplication.class, args);
	}

}
