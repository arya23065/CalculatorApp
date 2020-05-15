import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SciCalcComponent } from './sci-calc.component';

describe('SciCalcComponent', () => {
  let component: SciCalcComponent;
  let fixture: ComponentFixture<SciCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SciCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
