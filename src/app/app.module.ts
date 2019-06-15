import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {environment} from '../environments/environment';
import {ChartsModule} from 'ng2-charts';
import { GraficaComponent } from './components/grafica/grafica.component';
import {HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './routing.module';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule
    , SocketIoModule.forRoot(config)
    , ChartsModule
    , HttpClientModule
    , RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
