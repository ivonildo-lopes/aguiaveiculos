import { Injectable } from '@angular/core';
import { Contato } from './contato.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { NotificationService } from '../shared/notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase, private notification: NotificationService) { }

  insert(contato: Contato) {
    this.db.list('contato').push(contato)
    .then((result) => {
      console.log(result.key);
      this.notification.success(['Contato inserido com sucesso'], 'Cadastro');
    });
  }

  update(contato: Contato, key: string){
    this.db.list('contato').update(key, contato)
    .then((result) => {
      this.notification.info(['Contato atualizado com sucesso'], 'Edição');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getAll() {
    return this.db.list('contato')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
      })
    );
  }

  delete(key: string) {
    this.db.object(`contato/${key}`).remove()
    .then((result) => {
      this.notification.info(['Contato removido com sucesso'], 'Exclusão');
    });
  }
}
