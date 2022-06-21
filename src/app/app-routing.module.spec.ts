

import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(AppRoutingModule);
    expect(module).toBeTruthy();
  });
});
