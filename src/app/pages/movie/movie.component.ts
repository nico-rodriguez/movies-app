import { first } from 'rxjs';
import {
  Movie,
  MovieCredits,
  MovieImages,
  MovieVideo,
} from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMAGE_SIZE } from '../../constants/images';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  public movie: Movie | null = null;
  public movieVideos: MovieVideo[] = [];
  public movieImages: MovieImages | null = null;
  public movieCredits: MovieCredits | null = null;
  public imageUrl!: string;
  public largeImagesBaseUrl: string = `https://image.tmdb.org/t/p/${IMAGE_SIZE.large}`;
  public mediumImagesBaseUrl: string = `https://image.tmdb.org/t/p/${IMAGE_SIZE.medium}`;

  constructor(
    private route: ActivatedRoute,
    private _moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }

  ngOnDestroy(): void {}

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

  getMovieImages(id: string) {
    this._moviesService.getMovieImages(id).subscribe((movieImages) => {
      this.movieImages = movieImages;
    });
  }

  getMovieCredits(id: string) {
    this._moviesService.getMovieCredits(id).subscribe((movieCredits) => {
      this.movieCredits = movieCredits;
    });
  }
}
