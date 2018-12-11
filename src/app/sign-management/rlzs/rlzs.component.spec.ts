import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RlzsComponent } from './rlzs.component';

describe('RlzsComponent', () => {
  let component: RlzsComponent;
  let fixture: ComponentFixture<RlzsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RlzsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RlzsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
