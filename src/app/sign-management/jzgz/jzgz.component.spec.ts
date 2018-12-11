import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JzgzComponent } from './jzgz.component';

describe('JzgzComponent', () => {
  let component: JzgzComponent;
  let fixture: ComponentFixture<JzgzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JzgzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JzgzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
