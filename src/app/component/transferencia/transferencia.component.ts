import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/model/transferencia.model';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['../../app.component.css']
})
export class TransferenciaComponent implements OnInit {
  error:boolean = false;
  errorDesc:string = "";
  transferencia:Transferencia = {dataHora: new Date().toLocaleString()};
 
  constructor(private router: Router) { }

  realizarTransferencia(){
    console.log(this.transferencia);
    if ( !this.transferencia.valor){
      this.error = true;      
      this.errorDesc = "Preencha o Valor "
    } else if (!this.transferencia.hashOrigem) {
      this.error = true;      
      this.errorDesc = "Preencha o campo Hash da Conta de Origem"
    } else  if ( !this.transferencia.valor){
      this.error = true;      
      this.errorDesc = "Preencha o Valor "
    } else if (!this.transferencia.hashDestino) {
      this.error = true;      
      this.errorDesc = "Preencha o campo Hash da Conta de Destino"
    }  else{
      this.error = false;
      alert('Transferência realizado com Sucesso!');

      this.router.navigate(['/extrato']);  
      
      
    }
  }

  ngOnInit(): void {
  
  }

}
