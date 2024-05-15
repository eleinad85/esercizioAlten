import { Component, OnInit } from '@angular/core';
import { ListaPostsComponent } from '../shared/listaPosts/listaPosts.component';

@Component({
  selector: 'app-listaEsercizioBase',
  templateUrl: './listaEsercizioBase.component.html',
  styleUrls: ['./listaEsercizioBase.component.css'],
  standalone: true,
  imports: [ListaPostsComponent]
})
export class ListaEsercizioBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
