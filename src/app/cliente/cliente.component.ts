import { Component } from '@angular/core';
import { AbstractControlDirective, FormsModule } from '@angular/forms';
import { ClienteDTO } from './clienteDTO';
import { CommonModule, JsonPipe } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { NgxCurrencyDirective } from 'ngx-currency';
import { SwalComponent, SwalDirective, SweetAlert2LoaderService, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import  Swal from 'sweetalert2';
import { MsgService } from '../msg.service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe, NgxMaskDirective, NgxMaskPipe, NgxCurrencyDirective, SweetAlert2Module],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent {

  public cliente: ClienteDTO = new ClienteDTO();

  constructor(private msg: MsgService){
   this.cliente.nome = "teste";
  }


  Salvar(){
    console.log(this.cliente);
    this.msg.Sucesso();
   
  }


}
