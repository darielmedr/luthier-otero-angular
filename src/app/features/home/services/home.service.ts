import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeaturedImagePortfolioCarousel } from '../models/featured-image-portfolio-carousel';
import { HomeImages } from '../models/home-images';

@Injectable()
export class HomeService {

  private apiUrl: string = '/assets/api/home';

  constructor(private http: HttpClient) {
    this.getAndStoreHomeImagesUrl();
  }

  private getAndStoreHomeImagesUrl(): void {
    this.http.get<HomeImages[]>(`${this.apiUrl}/home-images.json`).subscribe(
      (images: HomeImages[]) => images.map(
        (image: HomeImages) => {
          this.storeImageUrl(image.key, image.url);
        }
      )
    );
  }
  private storeImageUrl(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getHomeBackgroundImageUrl(): string {
    const storedItem: string | any = localStorage.getItem('home');
    return (storedItem) ? storedItem : '';
  }

  public getHomeLogoImageUrl(): string {
    const storedItem: string | any = localStorage.getItem('logo');
    return (storedItem) ? storedItem : '';
  }

  public getFeaturedImagesPortfolioCarousel(): Observable<FeaturedImagePortfolioCarousel[]> {
    return this.http.get<FeaturedImagePortfolioCarousel[]>(`${this.apiUrl}/featured-images-carousel.json`);
  }
}
