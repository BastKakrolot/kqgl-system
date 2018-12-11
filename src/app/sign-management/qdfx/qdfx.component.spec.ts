import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QdfxComponent } from './qdfx.component';

describe('QdfxComponent', () => {
  let component: QdfxComponent;
  let fixture: ComponentFixture<QdfxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QdfxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QdfxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
