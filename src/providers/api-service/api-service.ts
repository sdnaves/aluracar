import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiServiceProvider {

  private _url: string = 'http://localhost:8080/api'

  constructor(public http: HttpClient) {
  }

  get url() {
    return this._url;
  }
}
