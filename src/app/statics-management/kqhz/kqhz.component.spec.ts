import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqhzComponent } from './kqhz.component';

describe('KqhzComponent', () => {
  let component: KqhzComponent;
  let fixture: ComponentFixture<KqhzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqhzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqhzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
