import { Genre } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  public genres: Genre[] = [];

  constructor(private _moviesService: MoviesService) {}
  ngOnInit(): void {
    this._moviesService.getMoviesGenres().subscribe((genres) => {
      this.genres = genres;
    });
  }
}
