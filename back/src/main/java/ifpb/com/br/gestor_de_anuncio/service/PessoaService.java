package ifpb.com.br.gestor_de_anuncio.service;


import ifpb.com.br.gestor_de_anuncio.domain.Pessoa;
import ifpb.com.br.gestor_de_anuncio.repository.PessoaRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class PessoaService {

    private final PessoaRepository pessoaRepository;

    public void salvar(Pessoa pessoa) {
        pessoaRepository.save(pessoa);
    }

    public Pessoa buscarPorId(Long id) {
        return pessoaRepository.findById(id).get();
    }

    public void remover(Long id) {
        pessoaRepository.deleteById(id);
    }

    public void atualizar(Pessoa pessoa) {
        pessoaRepository.save(pessoa);
    }

    public List<Pessoa> listar() {
        return pessoaRepository.findAll();
    }

    public List<Pessoa> listarPorNome(String nome) {
        List<Pessoa> pessoas = new ArrayList<>();
        for (Pessoa pessoa : pessoaRepository.findAll()) {
            if (pessoa.getNome().contains(nome)) {
                pessoas.add(pessoa);
            }
        }
        return pessoas;
    }

    public Pessoa buscarPorEmail(String email) {

        Optional<Pessoa> pessoa = pessoaRepository.findByEmail(email);

        return pessoa.orElse(null);
    }

}
