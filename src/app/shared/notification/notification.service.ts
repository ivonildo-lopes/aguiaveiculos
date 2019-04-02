import { Injectable, OnInit } from '@angular/core';
import { isEmpty } from 'lodash';
import { Response } from '../../api.response.model';

import { ToastrService, ToastrConfig } from 'ngx-toastr';
import { take } from 'rxjs/operators';

export enum MessageType {
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  SUCCESS = 4
}

@Injectable()
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  info(messages: string[], title: string) {
    this.showToastr(messages, title, MessageType.INFO);
  }

  error(messages: string[], title: string) {
    this.showToastr(messages, title, MessageType.ERROR);
  }

  warn(messages: string[], title: string) {
    this.showToastr(messages, title, MessageType.WARN);
  }

  success(messages: string[], title: string) {
    this.showToastr(messages, title, MessageType.SUCCESS);
  }

  /*
    send(data: Response) {
        if (isEmpty(data)) return;
        if (!isEmpty(data.infos)) this.info(data.infos)
        if (!isEmpty(data.warns)) this.warn(data.warns)
        if (!isEmpty(data.errors)) this.error(data.errors)
    }

    */

  public showToastr(messages: string[], title: string, type: MessageType) {
    // this.setOptions()
    switch (type) {
      case MessageType.ERROR:
        this.toastr.error(this.trataMessage(messages), title, this.configDefault())
        .onTap
        .pipe(take(1))
        .subscribe(() => this.chamaOutroMetodo(messages));
        break;
      case MessageType.INFO:
        this.toastr.info(this.trataMessage(messages), title, {timeOut: 3000 , 'positionClass': 'toast-bottom-right',});
        break;
      case MessageType.WARN:
        this.toastr.warning(this.trataMessage(messages), title);
        break;
      case MessageType.SUCCESS:
        this.toastr.success(this.trataMessage(messages), title);
        break;
    }
  }

  configDefault() {
    return {
            'timeOut': 3000,
            'positionClass': 'toast-bottom-right',
          }
  }

  /*
    public setOptions() {
         {
            'closeButton': false,
            'debug': true,
            'newestOnTop': false,
            'progressBar': true,
            'positionClass': 'toast-top-right',
            'preventDuplicates': false,
            'onclick': null,
            'showDuration': '300',
            'hideDuration': '1000',
            'timeOut': '5000',
            'extendedTimeOut': '1000',
            'showEasing': 'swing',
            'hideEasing': 'linear',
            'showMethod': 'fadeIn',
            'hideMethod': 'fadeOut'
        }
    }
    */

  private trataMessage(messages: string[]): string {
    let message = '';
    messages.forEach(m => {
      message += m; //+'<br/>';
    });
    return message;
  }

  private chamaOutroMetodo(messages) {
    console.log('envia por email ou faz alguma coisa' + messages);

  }
}
