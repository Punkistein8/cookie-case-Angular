import { Component } from '@angular/core';
interface TarjetaPedido { // interface para el manejo de la tarjeta de pedido en el componente de pedidos
  nombre: string;
  precio: number;
  cantidad: number;
  imagen: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public arregloPedidos: TarjetaPedido[] = [] // se ejecuta al iniciar el componente y se puede usar para inicializar variables y llamar a funciones que se ejecuten al iniciar el componente

  title = 'cookie-case';
  constructor() { } // se ejecuta al crear el componente y se puede usar para inicializar variables y llamar a funciones que se ejecuten al iniciar el componente
  ngOnInit(): void { // se ejecuta al iniciar el componente y se puede usar para inicializar variables
    this.arregloPedidos = [
      {
        nombre: 'Coca-Cola',
        precio: 1.5,
        cantidad: 1,
        imagen: 'https://www.cocacola.com/content/dam/ccp/documents/product/images/product/large/Coca-Cola-Bottle-Large-1.png'
      },
      {
        nombre: 'Fanta',
        precio: 1.5,
        cantidad: 1,
        imagen: 'https://www.cocacola.com/content/dam/ccp/documents/product/images/product/large/Fanta-Bottle-Large-1.png'
      }]
  }
}
