import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentario-card',
  templateUrl: './comentario-card.component.html',
  styleUrls: ['./comentario-card.component.css']
})
export class ComentarioCardComponent implements OnInit {

  constructor() { }

  @Input() dataEntrante: any;

  ngOnInit(): void {
  }

}
