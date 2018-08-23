import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Carro } from '../../models/carro';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros: Carro[];

  constructor(public navCtrl: NavController,
              private http: HttpClient,
              private loadCtrl: LoadingController,
              private alertCtrl: AlertController) {

    let loading = this.loadCtrl.create({
      content: 'Carregando Carros...'
    });

    loading.present();

    this.http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos').subscribe(
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

}
