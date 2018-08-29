import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListaAgendamentosPage } from '../pages/lista-agendamentos/lista-agendamentos';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { UsuariosServiceProvider } from '../providers/usuarios-service/usuarios-service';
import { OneSignal, OSNotification } from '@ionic-native/onesignal';
import { AgendamentoDaoProvider } from '../providers/agendamento-dao/agendamento-dao';
import { Agendamento } from '../models/agendamento';
@Component({
  selector: 'myapp',
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) public nav: Nav;
  rootPage:any = LoginPage;

  public paginas = [
    { titulo: "Agendamentos", componente: ListaAgendamentosPage.name, icone: 'calendar' },
    { titulo: "Perfil", componente: PerfilPage.name, icone: 'person' }
  ]

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private usuariosService: UsuariosServiceProvider,
              private oneSignal: OneSignal,
              private agendamentoDao: AgendamentoDaoProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //Configurar OneSignal
      let iosConfigs = {
        kOSSettingsKeyAutoPrompt: true,
        kOSSettingsKeyInAppLaunchURL: false
      }

      this.oneSignal
          .startInit("a0fad1ce-4f7e-4f69-a39f-b28e3cbeffbc", "862664159816")
          .iosSettings(iosConfigs);
      
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

      this.oneSignal.handleNotificationReceived()
          .subscribe(
            (notficacao: OSNotification) => {
              let dadosAdicionais = notficacao.payload.additionalData;
              let agendamentoID = dadosAdicionais['agendamento-id'];
              this.agendamentoDao.recupera(agendamentoID)
                  .subscribe(
                    (agendamento: Agendamento) => {
                      agendamento.confirmado = true;
                      this.agendamentoDao.salva(agendamento);
                    }
                  );
            } 
          );

      this.oneSignal.endInit();
    });
  }

  irParaPagina (componente) {
    this.nav.push(componente);
  }

  get avatar() {
    return this.usuariosService.obtemAvatar();
  }

  get usuarioLogado() {
    return this.usuariosService.getUsuarioLogado();
  }
}

