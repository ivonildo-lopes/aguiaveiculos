import { Component, OnInit } from '@angular/core';
import { PdfServiceService } from '../pdf-service.service';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { AlertConfirmService } from '../../shared/alert-confirm/alert-confirm.service';
import { NotificationService } from '../../shared/notification/notification.service';

import Tour from 'tour';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  constructor(
    private pdfService: PdfServiceService,
    private notificationService: NotificationService,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  criaPdf() {
    this.pdfService.geraPdf().subscribe(res => {
      console.log(res.data);

      this.baixarRelatorio(res);
      this.exibirRelatorio(res);
    });
  }

  exibirRelatorio(res) {
    window.open('data:application/pdf;base64, ' + res.data);
  }

  baixarRelatorio(res) {
    const linkSource = 'data:application/pdf;base64,' + res.data;
    const downloadLink = document.createElement('a');
    const fileName = 'relatorio_cidades.pdf';

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  msg() {
    const apertouOk = result => {
      if (result.value) {
        console.log(result);
        this.notificationService.success(['Teste de Notificação'], 'teste');
        // this.exibirRelatorio();
      }
    };

    AlertConfirmService.showComfirm(`Teste de alerta?:`, 'warning', apertouOk);
  }

  enviarArquivo(event) {

    if (event.target.files && event.target.files[0]) {
      const arquivo = event.target.files[0];

      const formData = new FormData();
      formData.append('arquivo', arquivo);
      this.pdfService.enviarArquivo(formData);
    }

  }

  iniciarTour() {
    const myTour = {
      canExit: true,
      nextText: 'Próximo',
      previousText: 'Anterior',
      finishText: 'Finalizar',
      steps: [
        {
          target: '.1-passo',
          content: 'Botao do relatorio'
        },
        {
          target: '.2-passo',
          content: 'Botao da notificação'
        },
      ]
    };

    Tour.start(myTour);
  }
}
