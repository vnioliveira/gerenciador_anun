package ifpb.com.br.gestor_de_anuncio.service;

import ifpb.com.br.gestor_de_anuncio.domain.Anuncio;
import ifpb.com.br.gestor_de_anuncio.repository.AnuncioRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnuncioService {

    private final AnuncioRepository anuncioRepository;


    public void salvar(Anuncio anuncio) {

        System.out.println(anuncio);
        anuncioRepository.save(anuncio);
    }

    public Anuncio buscarPorId(Long id) {
        return anuncioRepository.findById(id).get();
    }

    public List<Anuncio> buscarPorPessoaId(Long id) {
        return anuncioRepository.findAllByPessoaId(id).get();
    }

    public void remover(Long id) {
        anuncioRepository.deleteById(id);
    }

    public void atualizar(Anuncio anuncio) {
        anuncioRepository.save(anuncio);
    }

    public List<Anuncio> listar() {
        return anuncioRepository.findAll();
    }

    public List<Anuncio> listarPorPessoa(String pessoaId) {
        List<Anuncio> anuncios = new ArrayList<>();
        for (Anuncio anuncio : anuncioRepository.findAll()) {
            if (anuncio.getPessoaId() == Long.parseLong(pessoaId)) {
                anuncios.add(anuncio);
            }
        }
        return anuncios;
    }

    public List<Anuncio> atualizarEmails(Long id, String emailNovo) {
        Optional<List<Anuncio>> anuncios = anuncioRepository.findAllByPessoaId(id);
        if (anuncios.isPresent()) {
            List<Anuncio> anuncios1 = anuncios.get();
            for (Anuncio anuncio : anuncios1) {
                anuncio.setPessoaEmail(emailNovo);
                anuncioRepository.save(anuncio);
            }
            return anuncios1;
        }
        return null;
    }

    public List<Anuncio> buscarPorAno(String ano) {
        return anuncioRepository.findByAno(ano);
    }

    public List<Anuncio> buscarPorModelo(String modelo) {
        return anuncioRepository.findByModelo(modelo);
    }
}
