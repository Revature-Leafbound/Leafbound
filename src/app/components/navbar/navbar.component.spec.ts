import { ComponentFixture, TestBed } from '@angular/core/testing';

import { navbar } from './navbar.component';

describe('NavbarComponent', () => {
  let component: navbar;
  let fixture: ComponentFixture<navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [navbar],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
