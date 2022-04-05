import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexGridComponent } from './dex-grid.component';

describe('DexGridComponent', () => {
  let component: DexGridComponent;
  let fixture: ComponentFixture<DexGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DexGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DexGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
