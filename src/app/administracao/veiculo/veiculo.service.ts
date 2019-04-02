import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../../shared/loading';
import { NotificationService } from '../../shared/notification/notification.service';
import { API_JAVA } from 'src/app/app.api';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/finally';
import { Response } from 'src/app/api.response.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private notificationService: NotificationService
  ) {}

  salvar(veiculo): Observable<Response> {
    return this.http.post<Response>(`${API_JAVA}/veiculo`, veiculo);
      // .subscribe(res => {
      //   console.log(res.status);
      //   this.notificationService.info(['Arquivo enviado com sucesso!'], 'Upload de Arquivo');
      // });
  }

  update(id, veiculo): Observable<Response> {
    return this.http.put<Response>(`${API_JAVA}/veiculo/${id}`, veiculo);
      // .subscribe(res => {
      //   console.log(res.status);
      //   this.notificationService.info(['Arquivo enviado com sucesso!'], 'Upload de Arquivo');
      // });
  }

  veiculoById(id) {
    this.loading.display(true);
    return this.http.get<Response>(`${API_JAVA}/veiculo/${id}`);
    // return this.http.get<Response>(`${API_JAVA}/veiculo/{id}`).pipe(
    //   finalize(res => {
    //     this.loading.display(false);
    //     res => res.data;
    //   })
    // );
  }


}
