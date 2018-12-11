import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QjglComponent } from './qjgl.component';

describe('QjglComponent', () => {
  let component: QjglComponent;
  let fixture: ComponentFixture<QjglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QjglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QjglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
