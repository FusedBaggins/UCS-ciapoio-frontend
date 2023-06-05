import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSituacaoVisitaComponent } from './select-situacao-visita.component';

describe('SelectSituacaoVisitaComponent', () => {
  let component: SelectSituacaoVisitaComponent;
  let fixture: ComponentFixture<SelectSituacaoVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSituacaoVisitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSituacaoVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
