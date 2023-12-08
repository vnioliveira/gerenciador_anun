package ifpb.com.br.gestor_de_anuncio.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@Table(name = "pessoa")
@Entity
public class Pessoa implements Serializable {

    @Id
    private Long id;

    private String nome;

    private String email;

    private String senha;

    private Boolean admin;

    public Pessoa() {

    }
}
