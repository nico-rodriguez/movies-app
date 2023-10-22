import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '08c319c267bed792d6bcc69617edca9f';

  constructor(private _httpClient: HttpClient) {}

  getTVShows(type: string = 'popular') {
    return this._httpClient.get(
      `${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`
    );
  }
}
