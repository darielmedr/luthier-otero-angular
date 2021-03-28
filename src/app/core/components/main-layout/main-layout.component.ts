import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HomeService } from 'src/app/features/home/services/home.service';
import { HomeImages } from '../../../features/home/models/home-images';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  private unsuscribe$: Subject<void> = new Subject<void>();
  public isCurrentRouteHome: boolean = false;
  public logoUrl: string = '';

  public menuItems = [
    { title: 'Home', path: 'home' },
    { title: 'Services', path: 'services' },
    { title: 'Portfolio', path: 'portfolio' },
  ];
  public adminItem = {
    path: 'admin', icon: 'fas fa-users-cog', popoverMessage: 'Admin only'
  };

  constructor(private router: Router,
              private homeService: HomeService) { }

  ngOnInit(): void {
    this.getLogo();
    this.verifyCurrentRouteIsHome();
  }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  private getLogo(): void {
    this.logoUrl = this.homeService.getHomeLogoImageUrl();
  }

  private verifyCurrentRouteIsHome() {
    this.router.events.pipe(takeUntil(this.unsuscribe$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isCurrentRouteHome = (event.urlAfterRedirects === '/home') ? true : false;
      }
    });
  }
}
