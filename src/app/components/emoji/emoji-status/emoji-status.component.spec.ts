import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiStatusComponent } from './emoji-status.component';

describe('EmojiStatusComponent', () => {
  let component: EmojiStatusComponent;
  let fixture: ComponentFixture<EmojiStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
