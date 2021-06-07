import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lista: String[]

  ngOnInit(): void {
    this.lista = []
    this.add()
  }

  add(): void {
    this.lista.push(`Item ${ this.lista.length }`)
  }

  title = 'teste-filho';
}
