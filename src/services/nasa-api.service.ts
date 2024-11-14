import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { NasaApod } from '../models/nasa-api';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class NasaApiService {
  private readonly API_BASE_URL = 'https://api.nasa.gov';

  constructor(private readonly http: HttpClient) {}

  getNasaApod(params?: { date?: string }) {
    return this.http.get<NasaApod>(`${this.API_BASE_URL}/planetary/apod`, {
      params: this.filterParams(params),
    });
  }

  private filterParams(params: any) {
    if (!params) return;
    params.api_key = environment.nasaApiKey;
    return new HttpParams({ fromObject: _.omitBy(params, _.isNil) });
  }
}
