import { Component, OnInit } from '@angular/core';
import { ListaPostsComponent } from '../shared/listaPosts/listaPosts.component';

@Component({
  selector: 'app-listaEsercizioModerato',
  templateUrl: './listaEsercizioModerato.component.html',
  styleUrls: ['./listaEsercizioModerato.component.css'],
  standalone: true,
  imports: [ListaPostsComponent]
})
export class ListaEsercizioModeratoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
