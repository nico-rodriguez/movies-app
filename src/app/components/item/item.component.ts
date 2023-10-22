import { Movie } from 'src/app/modesl/movie.model';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;

  constructor() {}

  ngOnInit(): void {}
}
