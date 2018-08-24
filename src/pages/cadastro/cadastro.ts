import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert, Button } from 'ionic-angular';
import { Carro } from '../../models/carro';
import { AgendamentosServiceProvider } from '../../providers/agendamentos-service/agendamentos-service';
import { HomePage } from '../home/home';
import { Agendamento } from '../../models/agendamento';

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
              private agendamentoService: AgendamentosServiceProvider) {

    this.carro = this.navParams.get('carroSelecionado');
    this.precoTotal = this.navParams.get('precoTotal');
  }

  agenda() {
    if (!this.nome || !this.endereco || !this.email) {
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
      data: this.data
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

    this.agendamentoService.agenda(agendamento)
      .finally(
        () => {
          this.alerta.setSubTitle(mensagem);
          this.alerta.present();
        }
      )
      .subscribe(
        () => {
          mensagem = "Agendado com Sucesso!";
        },
        () => {
          mensagem = "Falha ao Agendar!";
        }
      );
  }
}
