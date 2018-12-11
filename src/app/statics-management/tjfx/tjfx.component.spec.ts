import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjfxComponent } from './tjfx.component';

describe('TjfxComponent', () => {
  let component: TjfxComponent;
  let fixture: ComponentFixture<TjfxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjfxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjfxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
