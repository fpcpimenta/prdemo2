import { Injectable } from '@angular/core';

import  Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor() { }

  public Sucesso(){

    Swal.fire({
      title: "titulo",
      html: "texto",
      icon: "info",
      showCancelButton:false,
      allowEscapeKey:false,
      allowOutsideClick:false,
      buttonsStyling: false,

      customClass: {
          confirmButton: 'btn btn-info'
      }   

    });   
  }
}
