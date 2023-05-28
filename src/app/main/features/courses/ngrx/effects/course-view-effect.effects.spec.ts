import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CourseViewEffectEffects } from './course-view-effect.effects';

describe('CourseViewEffectEffects', () => {
  let actions$: Observable<any>;
  let effects: CourseViewEffectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseViewEffectEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CourseViewEffectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
