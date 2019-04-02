import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Response } from '../api.response.model';
import { API_JAVA } from '../app.api';
import { ResponseContentType } from '@angular/http';
import { LoadingService } from '../shared/loading';
import { NotificationService } from '../shared/notification/notification.service';

@Injectable()
export class PdfServiceService {
  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private notificationService: NotificationService
  ) {}

  geraPdf(): Observable<Response> {
    this.loading.display(true);
    return this.http.get<Response>(`${API_JAVA}/cidades/all`).pipe(
      finalize(() => {
        this.loading.display(false);
      })
    );
  }

  enviarArquivo(arquivo: FormData) {
    this.http
      .post(`${API_JAVA}/upload/`, arquivo)
      .subscribe(res => this.notificationService.success(['Arquivo enviado com sucesso!'], 'Upload de Arquivo'));
  }
}
