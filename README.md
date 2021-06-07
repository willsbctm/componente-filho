# Pai

Html:
```
oi
<button (click)="add()">Adicionar pelo pai</button>

<app-filho [listaFilho]="lista"></app-filho>
<app-filho [listaFilho]="lista"></app-filho
```

Typescript
```
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
```

# Filho

Html:
```
<p>app-filho works!</p>

<button (click)="add()">Adicionar pelo filho</button>

<div *ngFor="let item of listaFilho">
  {{item}}
</div>
```

Typescript
```
export class AppFilhoComponent implements OnInit {
  @Input() listaFilho: String[]
  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.listaFilho.push(`Item ${ this.listaFilho.length }`)
  }
}
```

