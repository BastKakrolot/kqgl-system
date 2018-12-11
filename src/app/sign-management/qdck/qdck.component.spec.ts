import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QdckComponent } from './qdck.component';

describe('QdckComponent', () => {
  let component: QdckComponent;
  let fixture: ComponentFixture<QdckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QdckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QdckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
