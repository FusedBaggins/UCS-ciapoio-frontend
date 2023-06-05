import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEntidadeParceiraComponent } from './listagem-entidade-parceira.component';

describe('ListagemEntidadeParceiraComponent', () => {
  let component: ListagemEntidadeParceiraComponent;
  let fixture: ComponentFixture<ListagemEntidadeParceiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemEntidadeParceiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemEntidadeParceiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
