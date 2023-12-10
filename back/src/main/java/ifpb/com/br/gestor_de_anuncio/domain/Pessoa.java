package ifpb.com.br.gestor_de_anuncio.domain;

import jakarta.persistence.*;
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

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="pessoa_id_seq")
    @SequenceGenerator(name="pessoa_id_seq", sequenceName="pessoa_id_seq", allocationSize=1)
    private Long id;
    @Column(name = "email")
    private String email;

    @Column (name = "senha")
    private String senha;

    @Column(name = "admin")
    private Boolean admin;

    public Pessoa() {

    }
}
