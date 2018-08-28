import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of'
import { Agendamento } from '../../models/agendamento';
import { ApiServiceProvider } from '../api-service/api-service';

@Injectable()
export class AgendamentosServiceProvider {

  private url: string;

  constructor(private http: HttpClient,
              private api: ApiServiceProvider) {
    this.url = this.api.url; 
  }

  agenda(agendamento: Agendamento) {
    return this.http
            .post(this.url+"/agendamento/agenda", agendamento)
            .do( () => agendamento.enviado = true)
            .catch( (erro) => of(new Error("Falha ao Agendar!")));
  }
}
