package ifpb.com.br.gestor_de_anuncio.repository;


import ifpb.com.br.gestor_de_anuncio.domain.EmailModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface EmailRepository extends JpaRepository<EmailModel, UUID> {
}
