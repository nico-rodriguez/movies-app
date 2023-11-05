import { Movie, MovieVideo } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMAGE_SIZE } from '../../constants/images';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movie: Movie | null = null;
  public movieVideos: MovieVideo[] = [];
  public imageUrl!: string;

  constructor(
    private route: ActivatedRoute,
    private _moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
    });
  }

  getMovie(id: string) {
    this._moviesService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
      this.imageUrl = `https://image.tmdb.org/t/p/${IMAGE_SIZE.medium}${this.movie?.poster_path}`;
    });
  }

  getMovieVideos(id: string) {
    this._moviesService.getMovieVideos(id).subscribe((movieVideos) => {
      this.movieVideos = movieVideos;
    });
  }
}
