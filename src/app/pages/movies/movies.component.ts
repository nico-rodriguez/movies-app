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
  public genreId: string | null = null;
  public searchValue: string | null = null;

  constructor(
    private _moviesService: MoviesService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getMoviesPage(1);
      }
    });
  }

  public getMoviesByGenre(genreId: string, page: number) {
    this._moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  public getMoviesPage(page: number, searchValue?: string) {
    this._moviesService.searchMovies(page, searchValue).subscribe((movies) => {
      this.movies = movies;
    });
  }

  public paginate(event: any) {
    const page = event.page + 1;

    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, page);
    } else if (this.searchValue) {
      this.getMoviesPage(page, this.searchValue);
    } else {
      this.getMoviesPage(page);
    }
  }

  public searchByValue() {
    this.searchValue && this.getMoviesPage(1, this.searchValue);
  }
}
