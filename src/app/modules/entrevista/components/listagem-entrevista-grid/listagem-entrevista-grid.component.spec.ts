import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEntrevistaGridComponent } from './listagem-entrevista-grid.component';

describe('ListagemEntrevistaGridComponent', () => {
  let component: ListagemEntrevistaGridComponent;
  let fixture: ComponentFixture<ListagemEntrevistaGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemEntrevistaGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemEntrevistaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
