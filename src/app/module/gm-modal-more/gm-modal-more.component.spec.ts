import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmModalMoreComponent } from './gm-modal-more.component';

describe('GmModalMoreComponent', () => {
  let component: GmModalMoreComponent;
  let fixture: ComponentFixture<GmModalMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmModalMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmModalMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
