import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbglComponent } from './jbgl.component';

describe('JbglComponent', () => {
  let component: JbglComponent;
  let fixture: ComponentFixture<JbglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
