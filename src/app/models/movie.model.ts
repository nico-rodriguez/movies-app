import { Base } from './base.model';

export interface Movie extends Base {
  type: 'Movie';
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDto {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieVideo {
  site: string;
  key: string;
}

export interface MovieImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface MovieCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

export interface MovieVideoDto {
  id: number;
  results: MovieVideo[];
}

export interface Genre {
  id: number;
  name: string;
}
