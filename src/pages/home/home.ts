import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Carro } from '../../models/carro';
import { HttpErrorResponse } from '@angular/common/http'
import { CarrosServiceProvider } from '../../providers/carros-service/carros-service';
import { NavLifeCycles } from '../../utils/ionic/nav/nav-lifecycles';
import { EscolhaPage } from '../escolha/escolha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifeCycles {

  public carros: Carro[];

  constructor(public navCtrl: NavController,
              private loadCtrl: LoadingController,
              private alertCtrl: AlertController,
              private carrosServ: CarrosServiceProvider) { }

  ionViewDidLoad() {
    let loading = this.loadCtrl.create({
      content: 'Carregando Carros...'
    });

    loading.present();

    this.carrosServ.lista().subscribe(
      (carros) => {
        this.carros = carros;

        loading.dismiss();
      },
      (erro: HttpErrorResponse) => {
        console.log(erro);
        loading.dismiss();

        this.alertCtrl.create({
          title: 'Falha na Conexão',
          subTitle: 'Não foi possivel carregar a lista de carros!',
          buttons: [
            { text: 'ok' }
          ]
        }).present();
      }
    );
  }

  selecionaCarro(carro: Carro){
    console.log(carro);
    this.navCtrl.push(EscolhaPage);
  }

}
