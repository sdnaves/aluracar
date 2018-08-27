import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Agendamento } from '../../models/agendamento';

@Injectable()
export class AgendamentosServiceProvider {

  private url = "http://localhost:8080/api";

  constructor(private http: HttpClient) {
    
  }

  agenda(agendamento: Agendamento) {
    return this.http
            .post(this.url+"/agendamento/agenda", agendamento)
            .do( () => agendamento.enviado = true)
            .catch( (erro) => Observable.of(new Error("Falha ao Agendar!")));
  }
}
