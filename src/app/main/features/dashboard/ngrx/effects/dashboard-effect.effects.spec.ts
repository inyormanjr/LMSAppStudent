import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DashboardEffectEffects } from './dashboard-effect.effects';

describe('DashboardEffectEffects', () => {
  let actions$: Observable<any>;
  let effects: DashboardEffectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DashboardEffectEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DashboardEffectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
