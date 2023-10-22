import { map, of, switchMap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MovieDto } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '08c319c267bed792d6bcc69617edca9f';

  constructor(private _httpClient: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this._httpClient
      .get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(
        map(({ results }) => {
          results.forEach((result) => {
            result.type = 'Movie';
          });

          return results;
        }),
        map((movies) => movies.slice(0, count))
      );
  }

  searchMovies(page: number) {
    return this._httpClient
      .get<MovieDto>(
        `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        map(({ results }) => {
          results.forEach((result) => {
            result.type = 'Movie';
          });

          return results;
        })
      );
  }
}
