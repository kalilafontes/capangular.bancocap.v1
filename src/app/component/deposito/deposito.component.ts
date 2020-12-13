import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deposito } from 'src/app/model/deposito.model';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['../../app.component.css']
})
export class DepositoComponent implements OnInit {
  error:boolean = false;
  errorDesc:string = "";
  deposito:Deposito = {dataHora: new Date().toLocaleString()};
 
  constructor(private router: Router) { }

  realizarDeposito(){
    console.log(this.deposito.dataHora);
    if (!this.deposito.hash) {
      this.error = true;      
      this.errorDesc = "Preencha o campo Hash"
    } else  if ( !this.deposito.valor){
      this.error = true;      
      this.errorDesc = "Preencha o Valor "
    } else{
      this.error = false;
      alert('Depósito realizado com Sucesso!');

      this.router.navigate(['/home']);  
      
      
    }
  }

  ngOnInit(): void {
  
  }

}
