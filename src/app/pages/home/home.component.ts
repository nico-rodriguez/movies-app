import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/modesl/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    return;
    this._moviesService.getMovies().subscribe((movies: any) => {
      this.movies = movies.results;
      console.log({ movies });
    });
  }
}
