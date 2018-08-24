import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AgendamentosServiceProvider {

  private url = "http://localhost:8080/api";

  constructor(private http: HttpClient) {
    
  }

  agenda(agendamento) {
    return this.http.post(this.url+"/agendamento/agenda", agendamento);
  }
}
