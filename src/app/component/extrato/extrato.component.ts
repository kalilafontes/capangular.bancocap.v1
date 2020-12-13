import { Component, OnInit } from '@angular/core';
import { Extrato } from 'src/app/model/extrato.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  extrato:Extrato = {};

  colunas = [
    { field: 'dataHora' },
    { field: 'valor', valueFormatter: params => this.currencyFormatter(params.data.valor, 'R$')   },
    { field: 'tipo' },
    { field: 'hash' },
    { field: 'hashOrigem' },
    { field: 'hashDestino' },

  ];

  linhas = [
      { dataHora: '13/12/2020 10:12:55',  valor: 500, tipo: 'Transferência',hashOrigem: '001', hashDestino: '002' },
      { dataHora: '13/12/2020 12:52:24',  valor: 700, tipo: 'Saque',hash: '002'},
      { dataHora: '13/12/2020 17:25:14',  valor: 250, tipo: 'Depósito',hash: '003'},
      { dataHora: '13/12/2020 19:37:19',  valor: 369, tipo: 'Depósito',hash: '004'},
      { dataHora: '13/12/2020 20:02:32',  valor: 852, tipo: 'Transferência',hashOrigem: '005', hashDestino: '001' },   
  ];

  constructor() { }

  currencyFormatter(valor, sign) {
    var decimal = valor.toFixed(2);
    var formatado = decimal.replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace('.', ',');
    return sign + ' ' +formatado;
  }

  ngOnInit(): void {
  }

}
