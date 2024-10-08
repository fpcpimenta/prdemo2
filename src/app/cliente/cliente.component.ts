import { Component, RendererFactory2 } from '@angular/core';
import { AbstractControlDirective, FormsModule } from '@angular/forms';
import { ClienteDTO } from './clienteDTO';
import { CommonModule, JsonPipe } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { NgxCurrencyDirective } from 'ngx-currency';
import { SwalComponent, SwalDirective, SweetAlert2LoaderService, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import  Swal from 'sweetalert2';
import { MsgService } from '../msg.service';
import { MinhaapiService } from '../minhaapi.service';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe, NgxMaskDirective, NgxMaskPipe, NgxCurrencyDirective, SweetAlert2Module],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {

  public cliente: ClienteDTO = new ClienteDTO();

  constructor(private wwwww: MsgService, private api: MinhaapiService){
   this.cliente.nome = "teste";
  }


  Salvar(){
    //console.log(this.cliente);

    this.api.Gravar(this.cliente.cep).then((ret=>{
      console.log(ret);

    }));

    this.api._gravarCEP2(this.cliente.cep).then((ret=>{
      
      

    }));

  //private onErro(e: any){  }
  }
}
