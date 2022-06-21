import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayShelfComponent } from './product-display-shelf.component';

describe('ProductDisplayShelfComponent', () => {
  let component: ProductDisplayShelfComponent;
  let fixture: ComponentFixture<ProductDisplayShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDisplayShelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplayShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
