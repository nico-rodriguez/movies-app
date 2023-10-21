import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = '08c319c267bed792d6bcc69617edca9f';

  constructor(private httpClient: HttpClient) {}

  getMovies(type: string = 'upcoming') {
    return this.httpClient.get(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
    );
  }
}
