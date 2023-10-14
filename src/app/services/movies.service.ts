import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getMovies() {
    return this.httpClient.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=08c319c267bed792d6bcc69617edca9f'
    );
  }
}
