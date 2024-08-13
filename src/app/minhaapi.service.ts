import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

const url: string = 'https://viacep.com.br/ws/';
const cp: any = {"Content-Type": "application/json"};
@Injectable({
  providedIn: 'root'
  
})
export class MinhaapiService {

  constructor(private _http: HttpClient) { }
/*
  private _getCliente(id: number | null): Observable<any>{
    return this._http.get('https://www.pagamentorecorrente/api/get/' + id, {headers: new HttpHeaders({"Content-Type": "application/json"})});
  }
*/
  private _getCEP(cep: string): Observable<any>{
    return this._http.get( url + cep + '/json/', {headers: new HttpHeaders(cp)});
  }

  private _gravarCEP(cep: any): Observable<any>{
    return this._http.get( url + cep + '/json/' ,{headers: new HttpHeaders({"Content-Type": "application/json"})});
  }


  public async _gravarCEP2(cep: any): Promise<any>{
    return this._http.get( url + cep + '/json/' ,{headers: new HttpHeaders({"Content-Type": "application/json"})});
  }

  public Gravar(cep: any): Promise<any>{
    return new Promise(p=>{
    this._gravarCEP(cep).pipe(take(1)).subscribe(
      (data)=>{
        if(data.uf == "MG"){
            p(data.logradouro);
        }else{
            console.log("NÃO É CEP DE MINAS");
        }
      },
      (erro)=>{
        console.log("erro");
      }),
      ()=>{
        console.log("terminout");
      };
    })
  }
}
