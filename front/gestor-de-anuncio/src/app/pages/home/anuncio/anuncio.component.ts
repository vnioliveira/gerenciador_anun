import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Anuncio } from 'src/domains/Anuncio';
import { TableServices } from 'src/services/tables.services';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss']
})
export class AnuncioComponent{

  @Output() anuncioEvent = new EventEmitter<void>();

  estado : string | undefined;
  modelo : string | undefined;
  marca : string | undefined;
  ano : string | undefined;
  cor : string | undefined;
  preco : string | undefined;
  pessoaEmail : string | undefined;


  constructor(private tableServices: TableServices) { }


  salvar() {

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    let anuncio: Anuncio = {
      estado: this.estado,
      modelo: this.modelo,
      marca: this.marca,
      ano: this.ano,
      cor: this.cor,
      preco: this.preco,
      pessoaId: user.id,
      pessoaEmail: user.email,
      id: undefined
    }

    this.tableServices.salvarAnuncio(anuncio).subscribe({
      next: (data) => {
        console.log(data);
        alert('Anúncio cadastrado com sucesso!');
        this.anuncioEvent.emit();
      },
      error: (error) => {
        console.log(error);
        alert('Erro ao cadastrar anúncio!');
      }
    })
  }

}
