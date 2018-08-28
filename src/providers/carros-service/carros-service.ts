import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from '../../models/carro';
import { ApiServiceProvider } from '../api-service/api-service';

@Injectable()
export class CarrosServiceProvider {

  private url: string;

  constructor(private http: HttpClient,
              private api: ApiServiceProvider) {
    this.url = this.api.url;
  }

  lista() {
    return this.http.get<Carro[]>(this.url + '/carro/listaTodos')
  }
}
