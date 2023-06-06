import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCidadeComponent } from './select-cidade.component';

describe('SelectCidadeComponent', () => {
  let component: SelectCidadeComponent;
  let fixture: ComponentFixture<SelectCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
