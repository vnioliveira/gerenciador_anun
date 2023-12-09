package ifpb.com.br.gestor_de_anuncio.domain;

import jakarta.persistence.*;
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

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="id")
    @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="anuncio_id_seq")
    @SequenceGenerator(name="anuncio_id_seq", sequenceName="anuncio_id_seq", allocationSize=1)
    private Long id;

    @Column(name = "estado")
    private String estado;

    @Column(name = "modelo")
    private String modelo;

    @Column(name = "marca")
    private String marca;

    @Column(name = "ano")
    private String ano;

    @Column(name= "cor")
    private String cor;

    @Column(name = "preco")
    private Double preco;

    @Column(name = "pessoa_id")
    private long pessoaId;

    public Anuncio() {

    }
}
