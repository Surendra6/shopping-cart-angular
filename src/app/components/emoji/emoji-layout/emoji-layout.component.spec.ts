import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiLayoutComponent } from './emoji-layout.component';

describe('EmojiLayoutComponent', () => {
  let component: EmojiLayoutComponent;
  let fixture: ComponentFixture<EmojiLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
