import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { AgendamentoDaoProvider } from '../../providers/agendamento-dao/agendamento-dao';
import { Agendamento } from '../../models/agendamento';
import { AgendamentosServiceProvider } from '../../providers/agendamentos-service/agendamentos-service';

@IonicPage()
@Component({
  selector: 'page-lista-agendamentos',
  templateUrl: 'lista-agendamentos.html',
})
export class ListaAgendamentosPage {

  agendamentos: Agendamento[] = [];
  private alerta: Alert;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private agendamentoService: AgendamentosServiceProvider,
              private agendamentoDao: AgendamentoDaoProvider) {
  }

  ionViewDidLoad() {
    this.agendamentoDao.listaTodos()
                       .subscribe (
                         (agendamentos: Agendamento[]) => {
                           this.agendamentos = agendamentos;
                         }
                       );
  }

  ionViewDidEnter() {
    setTimeout(() => this.atualizaAgendamentos(), 5000);
  }

  atualizaAgendamentos() {
    this.agendamentos.filter((agendamento: Agendamento) => agendamento.confirmado)
        .forEach((agendamento: Agendamento) => {
          agendamento.visualizado = true;
          this.agendamentoDao.salva(agendamento);
        })
  }

  reenvia (agendamento: Agendamento){

    this.alerta = this.alertCtrl.create({
      title: "Aviso",
      buttons: [{ text: "ok" }]
    });

    let mensagem = "";

    this.agendamentoService.agenda(agendamento)
        .mergeMap( (valor) => {
          let observable = this.agendamentoDao.salva(agendamento);
          if (valor instanceof Error) {
            throw valor;
          }
          return observable;
        })
        .finally(
          () => {
            this.alerta.setSubTitle(mensagem);
            this.alerta.present();
          }
        )
        .subscribe(
          () => { mensagem = "Agendamento reenviado com Sucesso!"; },
          (erro: Error) => { mensagem = erro.message; }
        );
  }
}
