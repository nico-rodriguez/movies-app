import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss'],
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;

  constructor(private sanitazer: DomSanitizer) {}

  ngOnInit(): void {}

  getSafeUrl(url: string) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(url);
  }
}
