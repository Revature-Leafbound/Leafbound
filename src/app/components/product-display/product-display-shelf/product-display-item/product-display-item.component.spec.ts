import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayItemComponent } from './product-display-item.component';

describe('ProductDisplayItemComponent', () => {
  let component: ProductDisplayItemComponent;
  let fixture: ComponentFixture<ProductDisplayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDisplayItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
