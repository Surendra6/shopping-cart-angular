import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMatchFoundComponent } from './no-match-found.component';

describe('NoMatchFoundComponent', () => {
  let component: NoMatchFoundComponent;
  let fixture: ComponentFixture<NoMatchFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoMatchFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMatchFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
