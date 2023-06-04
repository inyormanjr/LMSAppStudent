import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerableSectionComponent } from './answerable-section.component';

describe('AnswerableSectionComponent', () => {
  let component: AnswerableSectionComponent;
  let fixture: ComponentFixture<AnswerableSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerableSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
