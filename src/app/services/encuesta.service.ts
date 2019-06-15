import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private httpClient: HttpClient) { }

  getEncuestas() {
    return this.httpClient.get(environment.wsUrl + '/encuesta');
  }
}
