import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Carro } from '../../models/carro';
import { AgendamentosServiceProvider } from '../../providers/agendamentos-service/agendamentos-service';
import { HomePage } from '../home/home';
import { Agendamento } from '../../models/agendamento';

import { AgendamentoDaoProvider } from '../../providers/agendamento-dao/agendamento-dao';

import { Vibration } from '@ionic-native/vibration';
import { DatePicker } from '@ionic-native/date-picker';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public carro: Carro;
  public precoTotal: number;

  public nome: string = "";
  public endereco: string = "";
  public email: string = "";
  public data: string = new Date().toISOString();

  private alerta: Alert;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private agendamentoService: AgendamentosServiceProvider,
              private vibration: Vibration,
              private datePicker: DatePicker,
              private agendamentoDao: AgendamentoDaoProvider) {

    this.carro = this.navParams.get('carroSelecionado');
    this.precoTotal = this.navParams.get('precoTotal');
  }

  selecionaData() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date'
    }).then(
      data => this.data = data.toISOString()
    );
  }

  agenda() {
    if (!this.nome || !this.endereco || !this.email) {
      this.vibration.vibrate(500);
      this.alertCtrl.create({
        title: "Aviso",
        subTitle: "Preenha todos os campos",
        buttons: [
          { text: 'ok' }
        ]
      }).present();

      return;
    }

    let agendamento: Agendamento = {
      nomeCliente: this.nome,
      enderecoCliente: this.endereco,
      emailCliente: this.email,
      modeloCarro: this.carro.nome,
      precoTotal: this.precoTotal,
      data: this.data,
      confirmado: false,
      enviado: false
    }

    this.alerta = this.alertCtrl.create({
      title: "Aviso",
      buttons: [
        {
          text: "ok",
          handler: () => { this.navCtrl.setRoot(HomePage) }
        }
      ]
    });

    let mensagem = "";

    this.agendamentoDao
        .isDuplicado(agendamento)
        .mergeMap( (duplicado) => {
          if (duplicado) {
            throw new Error('Agendamento Existente!')
          }
          return this.agendamentoService.agenda(agendamento);
        })
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
          () => { mensagem = "Agendado com Sucesso!"; },
          (erro: Error) => { mensagem = erro.message; }
        );
  }
}
