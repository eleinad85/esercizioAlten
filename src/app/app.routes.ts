import { Routes } from '@angular/router';
import { ListaEsercizioBaseComponent } from './components/listaEsercizioBase/listaEsercizioBase.component';
import { ListaEsercizioModeratoComponent } from './components/listaEsercizioModerato/listaEsercizioModerato.component';

export const routes: Routes = [

    { path: "listabase", component: ListaEsercizioBaseComponent },
    { path: "listamoderato", component: ListaEsercizioModeratoComponent },
];
