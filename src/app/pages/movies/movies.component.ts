import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    return;
    this.getMoviesPage(0);
  }

  getMoviesPage(page: number) {
    this._moviesService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  public paginate(event: any) {
    console.log({ event });
    this.getMoviesPage(event.page + 1);
  }
}
