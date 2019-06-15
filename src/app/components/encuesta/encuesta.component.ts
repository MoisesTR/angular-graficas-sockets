import { Component, OnInit } from '@angular/core';
import {Label} from 'ng2-charts';
import {ChartDataSets} from 'chart.js';
import {EncuestaService} from '../../services/encuesta.service';
import {WebsocketService} from '../../services/websocket.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public barChartLabels: Label[] = ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4git a'];

  public barChartData: ChartDataSets[] = [
    { data: [20, 0, 0, 0], label: 'Encuestas' }
  ];

  constructor(private encuestaService: EncuestaService, private wsService: WebsocketService) { }

  ngOnInit() {
    this.encuestaService.getEncuestas().subscribe(
      (encuestas: any) => {
        console.log(encuestas)
        this.barChartData = encuestas;
      }
    );

    this.escucharSockets();
  }

  escucharSockets() {
    this.wsService.listen('cambio-encuesta').subscribe(
      (encuestas: any) => {
        this.barChartData = encuestas;
      }, error => {
        console.log(error);
      }
    );
  }
}
