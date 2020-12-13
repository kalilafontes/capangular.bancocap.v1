import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Saque } from 'src/app/model/saque.model';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['../../app.component.css']
})
export class SaqueComponent implements OnInit {

  error:boolean = false;
  errorDesc:string = "";
  saque:Saque = {dataHora: new Date().toLocaleString()};
 
  constructor(private router: Router) { }

  realizarSaque(){
    console.log(this.saque.dataHora);
    if (!this.saque.hash) {
      this.error = true;      
      this.errorDesc = "Preencha o campo Hash"
    } else  if ( !this.saque.valor){
      this.error = true;      
      this.errorDesc = "Preencha o Valor "
    } else{
      this.error = false;
      alert('Saque realizado com Sucesso!');

      this.router.navigate(['/home']);  
      
      
    }
  }

  ngOnInit(): void {
  
  }

}
