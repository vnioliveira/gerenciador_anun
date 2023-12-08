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
@Table(name = "anuncio")
@Entity
public class Anuncio implements Serializable {

    @Id
    private Long id;

    private String estado;

    private String modelo;

    private String marca;

    private String ano;

    private String cor;

    private String preco;

    private long pessoaId;

    public Anuncio() {

    }
}
