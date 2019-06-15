import {NgModule} from '@angular/core';
import {GraficaComponent} from './components/grafica/grafica.component';
import {RouterModule, Routes} from '@angular/router';
import {EncuestaComponent} from './components/encuesta/encuesta.component';

const appRoutes: Routes = [
  {path: '', component: GraficaComponent}
  , {path: 'grafica-meses', component: GraficaComponent}
  , {path: 'encuesta', component: EncuestaComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
  , exports: [RouterModule]
})
export class RoutingModule { }
