package ifpb.com.br.gestor_de_anuncio.repository;

import ifpb.com.br.gestor_de_anuncio.domain.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AnuncioRepository extends JpaRepository<Anuncio, Long> {

    Optional<List<Anuncio>> findAllByPessoaId(Long id);

}
