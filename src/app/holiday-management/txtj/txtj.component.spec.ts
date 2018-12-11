import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtjComponent } from './txtj.component';

describe('TxtjComponent', () => {
  let component: TxtjComponent;
  let fixture: ComponentFixture<TxtjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxtjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
