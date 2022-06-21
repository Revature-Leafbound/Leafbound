import { TestBed } from '@angular/core/testing';
import { RoutingModule } from '../routing/routing.module';

describe('RoutingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RoutingModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(RoutingModule);
    expect(module).toBeTruthy();
  });
});
