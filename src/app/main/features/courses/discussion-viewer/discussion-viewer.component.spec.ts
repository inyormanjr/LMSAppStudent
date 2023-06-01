import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionViewerComponent } from './discussion-viewer.component';

describe('DiscussionViewerComponent', () => {
  let component: DiscussionViewerComponent;
  let fixture: ComponentFixture<DiscussionViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
