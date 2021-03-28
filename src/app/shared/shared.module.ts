import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const modules: any[] = [
  MDBBootstrapModule.forRoot(),
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [
    modules
  ]
})
export class SharedModule { }
