package ifpb.com.br.gestor_de_anuncio.service;


import ifpb.com.br.gestor_de_anuncio.domain.Pessoa;
import ifpb.com.br.gestor_de_anuncio.repository.PessoaRepository;
import jakarta.persistence.Id;
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

        int tamanho = pessoaRepository.findAll().size();
        pessoa.setAdmin(tamanho == 0);
        pessoaRepository.save(pessoa);
    }

    public Pessoa buscarPorId(Long id) {
        return pessoaRepository.findById(id).get();
    }

    public void remover(Long id) {
        pessoaRepository.deleteById(id);
    }

    public Pessoa atualizar(Pessoa pessoa) {
        Optional<Pessoa> pessoaEncontrada = pessoaRepository.findById(pessoa.getId());
        if(pessoaEncontrada.isPresent()) {
            Pessoa pessoa1 = pessoaEncontrada.get();
            pessoa1.setEmail(pessoa.getEmail());
            pessoa1.setSenha(pessoa.getSenha());
            pessoaRepository.save(pessoa1);
            return pessoa1;
        }
        else {
            return null;
        }
    }

    public List<Pessoa> listar() {
        return pessoaRepository.findAll();
    }

    public Pessoa buscarPorEmail(String email) {

        Optional<Pessoa> pessoa = pessoaRepository.findByEmail(email);

        return pessoa.orElse(null);
    }

}
