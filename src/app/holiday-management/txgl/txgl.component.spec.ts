import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxglComponent } from './txgl.component';

describe('TxglComponent', () => {
  let component: TxglComponent;
  let fixture: ComponentFixture<TxglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
