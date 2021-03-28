import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDescriptionComponent } from './services-description.component';

describe('ServicesDescriptionComponent', () => {
  let component: ServicesDescriptionComponent;
  let fixture: ComponentFixture<ServicesDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
