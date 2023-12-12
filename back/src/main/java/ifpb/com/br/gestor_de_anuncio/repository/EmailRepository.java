package ifpb.com.br.gestor_de_anuncio.repository;


import ifpb.com.br.gestor_de_anuncio.domain.EmailModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailRepository extends JpaRepository<EmailModel, Long> {
}