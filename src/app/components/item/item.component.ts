import { IMAGE_SIZE } from 'src/app/constants/images';
import { Movie } from 'src/app/models/movie.model';
import { TVShow } from 'src/app/models/tvshow.model';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | TVShow | null = null;

  public readonly imageUrl: string = `https://image.tmdb.org/t/p/${IMAGE_SIZE.small}/${this.itemData?.poster_path}`;

  constructor() {}

  ngOnInit(): void {}

  public isMovie(itemData: Movie | TVShow | null): itemData is Movie | null {
    return itemData === null || itemData.type === 'Movie';
  }

  public isTVShow(itemData: Movie | TVShow | null): itemData is TVShow | null {
    return itemData === null || itemData.type === 'TVShow';
  }
}
