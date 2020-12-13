import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ClienteViewComponent implements OnInit {

  colunas = [
    { field: 'nome' },
    { field: 'cpf' },
  ];

  linhas = [
      { nome: 'Arthur', cpf: '001' },
      { nome: 'Daniel', cpf: '002' },
      { nome: 'Kalila', cpf: '003'},
      { nome: 'Nilson', cpf: '004'},
      { nome: 'Reinaldo', cpf: '005'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
