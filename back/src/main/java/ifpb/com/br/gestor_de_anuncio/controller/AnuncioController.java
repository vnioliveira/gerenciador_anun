package ifpb.com.br.gestor_de_anuncio.controller;


import ifpb.com.br.gestor_de_anuncio.domain.Anuncio;
import ifpb.com.br.gestor_de_anuncio.service.AnuncioService;
import jakarta.persistence.Parameter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AnuncioController {

    private final AnuncioService anuncioService;

    @GetMapping("/anuncios")
    public ResponseEntity<List<Anuncio>> listar() {
        return ResponseEntity.status(200).body(anuncioService.listar());
    }

    @GetMapping("/anuncios/{id}")
    public ResponseEntity<Anuncio> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.status(200).body(anuncioService.buscarPorId(id));
    }

    @PostMapping("/anuncios")
    public ResponseEntity<Void> salvar(@RequestBody Anuncio anuncio) {
        System.out.println(anuncio);
        anuncioService.salvar(anuncio);
        return ResponseEntity.status(201).build();
    }

    @PutMapping("/anuncios")
    public ResponseEntity<Void> atualizar(@RequestBody Anuncio anuncio) {
        anuncioService.atualizar(anuncio);
        return ResponseEntity.status(200).build();
    }

    @DeleteMapping("/anuncios/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id) {
        anuncioService.remover(id);
        return ResponseEntity.status(200).build();
    }

    @GetMapping("/anuncios/pessoa/{id}")
    public ResponseEntity<List<Anuncio>> buscarPorPessoaId(@PathVariable Long id) {
        return ResponseEntity.status(200).body(anuncioService.buscarPorPessoaId(id));
    }

}
