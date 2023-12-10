package ifpb.com.br.gestor_de_anuncio.repository;

import ifpb.com.br.gestor_de_anuncio.domain.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

    Optional<Pessoa> findByEmail(String email);

}
