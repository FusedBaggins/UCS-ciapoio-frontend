import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVaraPenalComponent } from './select-vara-penal.component';

describe('VaraPenalComponent', () => {
  let component: SelectVaraPenalComponent;
  let fixture: ComponentFixture<SelectVaraPenalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectVaraPenalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectVaraPenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
