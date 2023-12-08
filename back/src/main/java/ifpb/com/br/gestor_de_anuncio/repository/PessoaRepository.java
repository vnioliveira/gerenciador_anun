package ifpb.com.br.gestor_de_anuncio.repository;

import ifpb.com.br.gestor_de_anuncio.domain.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
}
