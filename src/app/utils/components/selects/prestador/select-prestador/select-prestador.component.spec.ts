import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPrestadorComponent } from './select-prestador.component';

describe('SelectPrestadorComponent', () => {
  let component: SelectPrestadorComponent;
  let fixture: ComponentFixture<SelectPrestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPrestadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
