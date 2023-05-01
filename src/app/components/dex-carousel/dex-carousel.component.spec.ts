import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexCarouselComponent } from './dex-carousel.component';

describe('DexCarouselComponent', () => {
  let component: DexCarouselComponent;
  let fixture: ComponentFixture<DexCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DexCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DexCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
