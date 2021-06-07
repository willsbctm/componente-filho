import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './app-filho.component.html',
  styleUrls: ['./app-filho.component.css']
})
export class AppFilhoComponent implements OnInit {
  @Input() listaFilho: String[]
  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.listaFilho.push(`Item ${ this.listaFilho.length }`)
  }

}
