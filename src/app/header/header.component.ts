import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public titulo: string = 'CookieCase';
  public logo:string = "https://cliparting.com/wp-content/uploads/2016/08/Cookie-okie-clipart-4.png";
  constructor() { }

  ngOnInit(): void {
  }

}
