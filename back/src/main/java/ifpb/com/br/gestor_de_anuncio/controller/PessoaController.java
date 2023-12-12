package ifpb.com.br.gestor_de_anuncio.controller;


import ifpb.com.br.gestor_de_anuncio.domain.Pessoa;
import ifpb.com.br.gestor_de_anuncio.service.PessoaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class PessoaController {

    private final PessoaService pessoaService;

    @GetMapping("/pessoas")
    public ResponseEntity<List<Pessoa>> listar() {
        return ResponseEntity.status(200).body(pessoaService.listar());
    }

    @GetMapping("/pessoas/{id}")
    public ResponseEntity<Pessoa> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.status(200).body(pessoaService.buscarPorId(id));
    }

    @PostMapping("/pessoas")
    public ResponseEntity<Void> salvar(@RequestBody Pessoa pessoa) {
        pessoaService.salvar(pessoa);
        return ResponseEntity.status(201).build();
    }

    @DeleteMapping("/pessoas/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id) {
        pessoaService.remover(id);
        return ResponseEntity.status(200).build();
    }

    @PutMapping("/pessoas")
    public ResponseEntity<Pessoa> atualizar(@RequestBody Pessoa pessoa) {
        Pessoa pessoa1 = pessoaService.atualizar(pessoa);
        if(pessoa1 != null) {
            return ResponseEntity.status(200).body(pessoa1);
        }
        else {
            return ResponseEntity.status(404).build();
        }
    }

    @PostMapping("/pessoas/login")
    public ResponseEntity<Pessoa> login(@RequestBody Pessoa pessoa) {
        Pessoa pessoaLogada = pessoaService.buscarPorEmail(pessoa.getEmail());
        if (pessoaLogada != null) {
            if (pessoaLogada.getSenha().equals(pessoa.getSenha())) {
                return ResponseEntity.status(200).body(pessoaLogada);
            }
        }
        return ResponseEntity.status(404).build();
    }

    @PostMapping("/pessoas/cadastro")
    public ResponseEntity<Pessoa> cadastro(@RequestBody Pessoa pessoa) {
        Pessoa pessoaLogada = pessoaService.buscarPorEmail(pessoa.getEmail());
        if (pessoaLogada == null) {
            pessoa.setAdmin(false);
            pessoaService.salvar(pessoa);
            return ResponseEntity.status(200).body(pessoa);
        }
        return ResponseEntity.status(404).build();
    }
}
