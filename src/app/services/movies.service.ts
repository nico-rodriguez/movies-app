import { map, of, switchMap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GenresDto } from '../models/genre.model';
import { Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto } from '../models/movie.model';

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

  getMovie(id: string) {
    return this._httpClient.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
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

  getMovieVideos(id: string) {
    return this._httpClient
      .get<MovieVideoDto>(
        `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(map(({ results }) => results));
  }

  getMoviesGenres() {
    return this._httpClient
      .get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(map(({ genres }) => genres));
  }

  getMovieImages(id: string) {
    return this._httpClient.get<MovieImages>(
      `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`
    );
  }

  getMovieCredits(id: string) {
    return this._httpClient.get<MovieCredits>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getMoviesByGenre(genreId: string, page: number) {
    return this._httpClient
      .get<MovieDto>(
        `${this.baseUrl}/discover/movie?with_genre=${genreId}&page=${page}&api_key=${this.apiKey}`
      )
      .pipe(map(({ results }) => results));
  }
}
