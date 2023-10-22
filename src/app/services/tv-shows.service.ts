import { map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TVShowDto } from '../models/tvshow.model';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '08c319c267bed792d6bcc69617edca9f';

  constructor(private _httpClient: HttpClient) {}

  getTVShows(type: string = 'popular', count: number = 12) {
    return this._httpClient
      .get<TVShowDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(
        map(({ results }) => {
          results.forEach((result) => {
            result.type = 'TVShow';
          });

          return results;
        }),
        map((tvShows) => tvShows.slice(0, count))
      );
  }
}
