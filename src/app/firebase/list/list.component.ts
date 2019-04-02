import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';
import { ContatoDataService } from '../contato-data.service';
import { Contato } from '../contato.model';
import { AlertConfirmService } from '../../shared/alert-confirm/alert-confirm.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  contatos: Observable<any>;


  constructor(private service: FirebaseService,
              private contatoData: ContatoDataService
            ) {}

  ngOnInit() {
    this.contatos = this.service.getAll();
  }

  delete(key: string) {

    const apertouOk = result => {
      if (result.value) {
        this.service.delete(key);
      }
    };

    AlertConfirmService.showComfirm(`Tem certeza que deseja deletar?:`, 'warning', apertouOk);
  }

  update(contato: Contato, key: string) {
    this.contatoData.changeContato(contato, key);
  }

}
