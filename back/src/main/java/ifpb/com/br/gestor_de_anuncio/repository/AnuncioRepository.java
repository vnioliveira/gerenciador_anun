package ifpb.com.br.gestor_de_anuncio.repository;

import ifpb.com.br.gestor_de_anuncio.domain.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface AnuncioRepository extends JpaRepository<Anuncio, Long> {

    Optional<List<Anuncio>> findAllByPessoaId(Long id);

    @Query("SELECT a FROM Anuncio a WHERE a.ano LIKE %:ano%")
    List<Anuncio> findByAno(@Param("ano") String ano);

    @Query("SELECT a FROM Anuncio a WHERE a.modelo LIKE %:modelo%")
    List<Anuncio> findByModelo(@Param("modelo") String modelo);

}
