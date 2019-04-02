import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato.model';
import { FirebaseService } from '../firebase.service';
import { ContatoDataService } from '../contato-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  contato: Contato;
  key = '';

  constructor(private service: FirebaseService, private contatoData: ContatoDataService) { }

  ngOnInit() {
    this.contato = new Contato();

    this.contatoData.currentContato.subscribe(data => {
      if(data.contato && data.key) {
        this.contato = new Contato();
        this.contato.nome = data.contato.nome;
        this.contato.telefone = data.contato.telefone;
        this.key = data.key;
      }
    })
  }


  enviar() {
    if (this.key) {
      this.service.update(this.contato, this.key);
    } else {
      this.service.insert(this.contato);
    }

    this.contato = new Contato();
    this.key = '';
  }
}
