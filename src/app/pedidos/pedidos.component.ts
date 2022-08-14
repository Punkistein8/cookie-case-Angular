import { Component, Input, OnInit } from '@angular/core'; // Importamos el componente OnInit para poder usar el ngOnInit y el ngOnDestroy para poder destruir el componente

interface TarjetaPedido { // interface para el manejo de la tarjeta de pedido en el componente de pedidos
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

@Component({ // Decorador componente de Angular que permite definir una clase como componente de Angular y que se puede usar en una plantilla HTML.
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit { // variables de la interfaz de la tarjeta de pedido para el componente

  public arregloPedidos: TarjetaPedido[] = [] // se ejecuta al iniciar el componente y se puede usar para inicializar variables y llamar a funciones que se ejecuten al iniciar el componente

  constructor() { } // se ejecuta al crear el componente y se puede usar para inicializar variables y llamar a funciones que se ejecuten al iniciar el componente


  ngOnInit(): void { // se ejecuta al iniciar el componente y se puede usar para inicializar variables
    this.arregloPedidos = [
      {
        nombre: 'Tallarin Salteado',
        precio: 2.50,
        descripcion: 'El tallarín saltado es un plato típico de la gastronomía peruana, propio de la carta de un restaurante chifa así como el arroz chaufa y el wantán frito.',
        imagen: 'https://images.aws.nestle.recipes/resized/b098247013af9b3986f9128df709a6f3_Tallarin_saltado_de_pollo_1200_600.jpg'
      },
      {
        nombre: 'Crispy Chicken Wraps',
        precio: 4.50,
        descripcion: 'Bañado en los exóticos sabores del curry y coco tailandés, este bollito crujiente, relleno de pollo y camarones, se sirve en un consomé de bonito, acompañado de col lombarda.',
        imagen: 'https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2019/12/crispy-chicken-wraps.jpg'
      },

      {
        nombre: 'Chaulafan Especial',
        precio: 3.00,
        descripcion: 'Es originalmente un plato casero proveniente de China y del que se supone que procede de 4000 a. c., elaborado de una receta que incluye el arroz como ingrediente principal.',
        imagen: 'https://www.felipecampana.com/wp-content/uploads/2020/06/IMG_8833.jpg'
      },
      {
        nombre: 'Huarache Kobe',
        precio: 5.00,
        descripcion: 'Tiernas rebanadas de carne kobe servidas sobre una tortilla de maíz casera con queso, frijoles refritos y un mousse de aguacate.',
        imagen: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2019/07/receta-sencilla-de-huaraches.jpg'
      }
    ]
  }

}
