import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEntrevistaComponent } from './listagem-entrevista.component';

describe('ListagemEntrevistaComponent', () => {
  let component: ListagemEntrevistaComponent;
  let fixture: ComponentFixture<ListagemEntrevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemEntrevistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
