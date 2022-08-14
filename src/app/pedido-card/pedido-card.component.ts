import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-card.component.html',
  styleUrls: ['./pedido-card.component.css']
})
export class PedidoCardComponent implements OnInit {

  constructor() { }

  @Input() dataEntrante: any;// Decorador de Angular que permite definir una propiedad como entrada para un componente.

  ngOnInit(): void {
    
  }

}
