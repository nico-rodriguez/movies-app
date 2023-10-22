import { Base } from 'src/app/models/base.model';
import { Movie } from 'src/app/models/movie.model';
import { TVShow } from 'src/app/models/tvshow.model';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss'],
})
export class ItemsBannerComponent {
  @Input() title: string = '';
  @Input() items: Movie[] | TVShow[] = [];

  private isMovie(itemData: Base): itemData is Movie {
    return itemData === null || itemData.type === 'Movie';
  }

  private isTVShow(itemData: Base): itemData is TVShow {
    return itemData === null || itemData.type === 'TVShow';
  }

  public isMovieList(items: Base[]): items is Movie[] {
    return items.length === 0 || items.every(this.isMovie);
  }

  public isTVShowList(items: Base[]): items is TVShow[] {
    return items.length === 0 || items.every(this.isTVShow);
  }
}
