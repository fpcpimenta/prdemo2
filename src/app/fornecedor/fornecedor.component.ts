import { Component } from '@angular/core';
import { MsgService } from '../msg.service';

@Component({
  selector: 'app-fornecedor',
  standalone: true,
  imports: [],
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.scss'
})
export class FornecedorComponent {

  constructor(private msg: MsgService){

  }
  ShowMe(){
    this.msg.Sucesso();

  }
}
