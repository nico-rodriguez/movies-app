import { Movie } from 'src/app/modesl/movie.model';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss'],
})
export class ItemsBannerComponent {
  @Input() title: string = '';
  @Input() items: Movie[] = [];
}
