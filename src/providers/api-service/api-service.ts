import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiServiceProvider {

  private _url: string = 'http://192.168.15.40:7001/api'

  constructor(public http: HttpClient) {
  }

  get url() {
    return this._url;
  }
}
