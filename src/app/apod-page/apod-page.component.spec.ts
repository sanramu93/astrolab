import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodPageComponent } from './apod-page.component';

describe('ApodPageComponent', () => {
  let component: ApodPageComponent;
  let fixture: ComponentFixture<ApodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApodPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
