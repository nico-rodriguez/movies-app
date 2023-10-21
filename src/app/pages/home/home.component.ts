import { Movie } from 'src/app/modesl/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public popularMovies: Movie[] = [];
  public upcomingMovies: Movie[] = [];
  public topRatedMovies: Movie[] = [];

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    return;
    this._moviesService.getMovies('popular').subscribe((movies: any) => {
      this.popularMovies = movies.results;
    });
    this._moviesService.getMovies('upcoming').subscribe((movies: any) => {
      this.upcomingMovies = movies.results;
    });
    this._moviesService.getMovies('top_rated').subscribe((movies: any) => {
      this.topRatedMovies = movies.results;
    });
  }
}
