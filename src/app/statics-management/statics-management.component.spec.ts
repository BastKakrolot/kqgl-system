import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsManagementComponent } from './statics-management.component';

describe('StaticsManagementComponent', () => {
  let component: StaticsManagementComponent;
  let fixture: ComponentFixture<StaticsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
