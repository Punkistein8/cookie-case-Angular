import { Component, OnInit } from '@angular/core';

interface TarjetaComentario { // interface para el manejo de la tarjeta de pedido en el componente de pedidos
  foto: string;
  comentario: string;
  usuario: string;
  fecha: string;
}

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  public arregloComentarios: TarjetaComentario[] = []


  constructor() { }

  ngOnInit(): void {
    this.arregloComentarios = [
      {
        foto: 'https://randomuser.me/api/portraits/men/17.jpg',
        comentario: 'Adoro esos restaurantes que transmiten pasión en cada uno de sus platos. La cocina es creatividad e imaginación, pero creo que también requiere de mucha paciencia. Cuando yo cocino no siempre me salen bien los platos.',
        usuario: 'Juan',
        fecha: 'Sábado, 15 de Enero'
      },
      {
        foto: 'https://randomuser.me/api/portraits/women/8.jpg',
        comentario: 'El restaurante Cookie Case es un clásico de las estrellas Michelin en la Costa del Sol. Hace ahora 20 años que le concedieron su estrella y aunque ya habíamos ido un par de veces antes, solo puedo decir que los años le sientan muy, muy bien a este lugar.',
        usuario: 'Lucy',
        fecha: 'Lunes, 10 de marzo'
      },
      {
        foto: 'https://randomuser.me/api/portraits/women/3.jpg',
        comentario: 'Soy periodista y me encanta la gastronomía. Probar nuevos sabores y descubrir nuevos sitios es una delicia. Llevo trabajando en el mundo de la comunicación más de 20 años y este proyecto me mantiene muy ilusionada. Espero que supere a su creadora y traspase fronteras.',
        usuario: 'Hayley',
        fecha: 'Jueves, 7 de mayo'
      },
      {
        foto: 'https://randomuser.me/api/portraits/men/7.jpg',
        comentario: 'Los antipasti del Chef son muy recomendables; en verduras las alcachofas crudas para mojar cada pétalo en vinagreta es realmente delicioso y si de segundo no te apetece más pescado, te recomendamos un plato de pasta. Los spaghetti a la vongole son sublimes.',
        usuario: 'Kevin',
        fecha: 'Martes, 13 de febrero'
      },
      {
        foto: 'https://randomuser.me/api/portraits/women/98.jpg',
        comentario: 'La cava de vinos es amplia y surtida; los blancos son de notable alto Donnafugata digno de probar. En definitiva, siempre que voy a Malta acabo en Cookie Case, es que si vas a la isla, no lo puedes dejar de visitar.',
        usuario: 'Harper',
        fecha: 'Domingo, 29 de julio'
      },
      {
        foto: 'https://randomuser.me/api/portraits/men/23.jpg',
        comentario: 'Pocas veces el diseño, la utilidad, la fortaleza y la fiabilidad combinan de una forma tan perfecta como en las cocinas Cookie Case.Su robustez a la hora de enfrentar jornadas de trabajo “non stop” se contraponen a ese diseño moderno, elegante y con ese rejo italiano que hace pensar que son cocinas que no sufren el combate diario del servicio.',
        usuario: 'Henry',
        fecha: 'Miércoles, 17 de julio'
      }
    ]
  }
}
