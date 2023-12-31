import { IMAGE_SIZE } from 'src/app/constants/images';
import { Movie } from 'src/app/models/movie.model';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void => *', [animate('1s')]),
      transition('* => void', [animate('500ms')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() public items: Movie[] = [];
  @Input() public isBanner: boolean = false;

  public currentSlideIndex: number = 0;
  public readonly imageBaseUrl: string = `https://image.tmdb.org/t/p/${IMAGE_SIZE.large}/`;

  private readonly SLIDE_INTERVAL = 5000;

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, this.SLIDE_INTERVAL);
    }
  }
}
