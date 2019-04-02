import swal from 'sweetalert2';

export class AlertConfirmService {
  public static showComfirm(title: string, type: string | any, okEvent: any) {
    swal({
      title: title,
      type: type,
      width: '400px',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCancelButton: true,
      confirmButtonColor: '#1ab394',
      cancelButtonColor: '#ED5565',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      padding: 15
    }).then(okEvent);
  }
  public showSucess(title: string) {
    swal({
      title: title,
      type: 'success',
      width: '400px',
      padding: 15
    });
  }

// tslint:disable-next-line: member-ordering
  public static showInfo(title: string, type: string | any, okEvent: any) {
    swal({
      title: title,
      type: type,
      width: '400px',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showCancelButton: false,
      confirmButtonColor: '#1ab394',
      cancelButtonColor: '#ED5565',
      confirmButtonText: 'Voltar',
      cancelButtonText: 'Não',
      padding: 15
    }).then(okEvent);
  }
}
