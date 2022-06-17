import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShelfItemComponent } from './product-shelf-item.component';

describe('ProductShelfItemComponent', () => {
  let component: ProductShelfItemComponent;
  let fixture: ComponentFixture<ProductShelfItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShelfItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShelfItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
