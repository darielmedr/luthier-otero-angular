import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { IAlbum, Lightbox, LightboxConfig } from 'ngx-lightbox';
import { FeaturedImagePortfolioCarousel } from '../../models/featured-image-portfolio-carousel';

@Component({
  selector: 'app-portfolio-gallery',
  templateUrl: './portfolio-gallery.component.html',
  styleUrls: ['./portfolio-gallery.component.scss']
})
export class PortfolioGalleryComponent implements OnInit, OnChanges {

  @Input() images: Array<FeaturedImagePortfolioCarousel> = new Array<FeaturedImagePortfolioCarousel>();
  public album: IAlbum[] = [];

  constructor(private lightbox: Lightbox, private lightboxConfig: LightboxConfig) { }

  ngOnInit(): void {
    this.setLightboxConfig();
  }

  setLightboxConfig(): void {
    this.lightboxConfig.wrapAround = true;
    this.lightboxConfig.showImageNumberLabel = true;
    this.lightboxConfig.resizeDuration = 0.01;
    this.lightboxConfig.fadeDuration = 1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change: SimpleChange = changes['images'];
    if (!change.isFirstChange()) {
      this.setAlbum();
    }
  }

  setAlbum(): void {
    this.images.map(
      (image: FeaturedImagePortfolioCarousel) => {
        const albumImage = {
          src: image.url,
          caption: image.model,
          thumb: image.urlThumbnail
        };
        this.album.push(albumImage);
      });
  }

  public open(index: number): void {
    this.lightbox.open(this.album, index, this.lightboxConfig);
  }

}
