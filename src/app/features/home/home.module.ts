import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesDescriptionComponent } from './components/services-description/services-description.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioGalleryComponent } from './components/portfolio-gallery/portfolio-gallery.component';
import { LightboxModule } from 'ngx-lightbox';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, ServicesDescriptionComponent, PortfolioGalleryComponent, ContactInfoComponent, HomeFooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HttpClientModule,
    LightboxModule
  ]
})
export class HomeModule { }
