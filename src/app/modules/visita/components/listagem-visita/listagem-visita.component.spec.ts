import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemVisitaComponent } from './listagem-visita.component';

describe('ListagemVisitaComponent', () => {
  let component: ListagemVisitaComponent;
  let fixture: ComponentFixture<ListagemVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemVisitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
