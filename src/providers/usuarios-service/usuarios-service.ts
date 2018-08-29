import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ApiServiceProvider } from '../api-service/api-service';

const CHAVE = 'avatar-usuario'

@Injectable()
export class UsuariosServiceProvider {

  private usuarioLogado: Usuario;
  private url: string;

  constructor(private http: HttpClient,
              private api: ApiServiceProvider) {
    this.url = this.api.url;
  }

  efetuaLogin(email, senha) {
    return this.http.post<Usuario>(this.url+'/login', { email, senha })
                    .do((usuario: Usuario) => this.usuarioLogado = usuario);
  }

  getUsuarioLogado() {
    return this.usuarioLogado;
  }

  salvaAvatar(avatar) {
    localStorage.setItem(CHAVE, avatar);
  }

  obtemAvatar() {
    return localStorage.getItem(CHAVE) ? localStorage.getItem(CHAVE) : 'assets/imgs/avatar-padrao.jpg';
  }
}
