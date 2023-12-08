package ifpb.com.br.gestor_de_anuncio.repository;

import ifpb.com.br.gestor_de_anuncio.domain.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnuncioRepository extends JpaRepository<Anuncio, Long> {
}
