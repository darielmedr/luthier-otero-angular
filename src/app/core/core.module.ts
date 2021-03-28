import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { HomeService } from '../features/home/services/home.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    MainLayoutComponent
  ],
  providers: [
    HomeService
  ]
})
export class CoreModule { }
