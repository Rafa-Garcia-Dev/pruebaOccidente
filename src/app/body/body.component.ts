import { Component, OnInit } from '@angular/core';
import { Cliente, Pedido } from '../interfaces/interfaces.component';
import { getAws } from '../service/service.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  dataNit: Pedido = {
    nit: '800220154',
  };

  dataCliente: Cliente = {
    nit: '',
    nombre: '',
    capa: '',
    segmento: '',
    gerenteRelacion: '',
  };

  constructor(private awsService: getAws) {}

     ngOnInit(): void {
    this.obtenerCliente();
  }

  public obtenerCliente(){
    this.awsService.getClient(this.dataNit)
    .subscribe((respuesta:Cliente)=>{
      this.dataCliente = respuesta;
      console.log(this.dataCliente);
    });
  }
}
