import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignManagementComponent } from './sign-management.component';

describe('SignManagementComponent', () => {
  let component: SignManagementComponent;
  let fixture: ComponentFixture<SignManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
