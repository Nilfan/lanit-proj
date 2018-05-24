import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagFormComponent } from './hashtag-form.component';

describe('HashtagFormComponent', () => {
  let component: HashtagFormComponent;
  let fixture: ComponentFixture<HashtagFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
