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
  transferencia:Transferencia = {dataHora: new Date()};
 
  constructor(private router: Router) { }

  realizarDeposito(){
    console.log(this.transferencia.dataHora);
    if (!this.transferencia.hashOrigem) {
      this.error = true;      
      this.errorDesc = "Preencha o campo Hash da Conta de Origem"
    } else if (!this.transferencia.hashDestino) {
      this.error = true;      
      this.errorDesc = "Preencha o campo Hash da Conta de Destino"
    } else  if ( !this.transferencia.valor){
      this.error = true;      
      this.errorDesc = "Preencha o Valor "
    } else{
      this.error = false;
      alert('Transferência realizado com Sucesso!');

      this.router.navigate(['/home']);  
      
      
    }
  }

  ngOnInit(): void {
  
  }

}
