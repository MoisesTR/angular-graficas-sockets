import {Component, OnInit} from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {WebsocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Ventas' }
  ];
  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril'];

  constructor(private httpClient: HttpClient, private weService: WebsocketService) {}

  ngOnInit(): void {
    this.getDataGrafica();
    this.escucharSockets();
  }

  getDataGrafica() {
    this.httpClient.get(environment.wsUrl + '/grafica').subscribe(
      (grafica: any) => this.lineChartData = grafica);
  }

  escucharSockets() {
    this.weService.listen('cambio-grafica').subscribe(
      (data: any) => {
        console.log('Socket', data);
        this.lineChartData = data;
      }
    );
  }
}
