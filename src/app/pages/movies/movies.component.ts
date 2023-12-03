import { take } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(
    private _moviesService: MoviesService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.getMoviesByGenre(genreId);
      } else {
        this.getMoviesPage(0);
      }
    });
  }

  getMoviesByGenre(genreId: any) {
    throw new Error('Method not implemented.');
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
