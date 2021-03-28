import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FeaturedImagePortfolioCarousel } from './models/featured-image-portfolio-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private unsuscribe$: Subject<void> = new Subject<void>();
  public homeImageUrl: string = '';
  public imagesPortfolio: FeaturedImagePortfolioCarousel[] = new Array<FeaturedImagePortfolioCarousel>();

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getHomeBackgroundImage();
    this.getFeaturedImagesPortfolioCarousel();
  }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  private getHomeBackgroundImage(): void {
    this.homeImageUrl = this.homeService.getHomeBackgroundImageUrl();
  }

  private getFeaturedImagesPortfolioCarousel(): void {
    this.homeService.getFeaturedImagesPortfolioCarousel().pipe(takeUntil(this.unsuscribe$)).subscribe(
      (images: FeaturedImagePortfolioCarousel[]) => {
        this.imagesPortfolio = images;
      }
    );
  }

}
