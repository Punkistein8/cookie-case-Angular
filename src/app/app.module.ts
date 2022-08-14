import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidoCardComponent } from './pedido-card/pedido-card.component';
import { ComentarioCardComponent } from './comentario-card/comentario-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PedidosComponent,
    ComentariosComponent,
    CarritoComponent,
    PedidoCardComponent,
    ComentarioCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
