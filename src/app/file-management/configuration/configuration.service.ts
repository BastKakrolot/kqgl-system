import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientService, GmOptions } from '@static-resources';
import { RESTURL } from '../../../config/rest-url';

@Injectable()
export class ConfigurationService {
  constructor(
    private http: HttpClient
  ) { }
  private httpClientService = new HttpClientService(this.http);
  getData(gmParams?: object, options?: GmOptions): Observable<any> {
    return this.httpClientService
      .getRequest(RESTURL.getData, gmParams, options);
  }
}
