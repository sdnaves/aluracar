import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from '../../models/carro';

@Injectable()
export class CarrosServiceProvider {

  constructor(private http: HttpClient) {
    
  }

  lista() {
    return this.http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos')
  }
}
