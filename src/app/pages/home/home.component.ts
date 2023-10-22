import { Movie } from 'src/app/models/movie.model';
import { TVShow } from 'src/app/models/tvshow.model';
import { MoviesService } from 'src/app/services/movies.service';
import { TvShowsService } from 'src/app/services/tv-shows.service';

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
  public popularTVShows: TVShow[] = [];

  constructor(
    private _moviesService: MoviesService,
    private _tvShowsService: TvShowsService
  ) {}

  ngOnInit(): void {
    return;
    this._moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this._moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
    this._moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
    this._tvShowsService.getTVShows('popular').subscribe((tvShows) => {
      this.popularTVShows = tvShows;
    });
  }
}
