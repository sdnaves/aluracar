import { Injectable } from '@angular/core';
import { Agendamento } from '../../models/agendamento';
import { Observable } from 'rxjs/Observable';

import { Storage } from '@ionic/storage';

@Injectable()
export class AgendamentoDaoProvider {

  constructor(public storage: Storage) {
  }

  private geraChave(agendamento: Agendamento) {
    return agendamento.emailCliente + agendamento.data.substr(0, 10);
  }

  salva(agendamento: Agendamento) {
    let chave = this.geraChave(agendamento);
    let promise = this.storage.set(chave, agendamento);

    return Observable.fromPromise(promise);
  }

  recupera (agendamentoID) {
    let promise = this.storage
                      .get(agendamentoID);

    return Observable.fromPromise(promise);
  }

  isDuplicado(agendamento: Agendamento) {
    let chave = this.geraChave(agendamento);
    let promise = this.storage
                      .get(chave)
                      .then( (dado) => dado ? true : false );

    return Observable.fromPromise(promise);
  }

  listaTodos() {
    let agendamentos: Agendamento[] = [];

    let promise = this.storage
                    .forEach( (agendamento: Agendamento) => {
                      agendamentos.push(agendamento);
                    })
                    .then( () => agendamentos);
    
    return Observable.fromPromise(promise);
  }
}
