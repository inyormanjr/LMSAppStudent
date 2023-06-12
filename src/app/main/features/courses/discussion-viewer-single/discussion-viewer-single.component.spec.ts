import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionViewerSingleComponent } from './discussion-viewer-single.component';

describe('DiscussionViewerSingleComponent', () => {
  let component: DiscussionViewerSingleComponent;
  let fixture: ComponentFixture<DiscussionViewerSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionViewerSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionViewerSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
