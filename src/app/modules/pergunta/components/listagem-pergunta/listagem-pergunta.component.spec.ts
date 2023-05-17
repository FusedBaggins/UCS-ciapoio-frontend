import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPerguntaComponent } from './listagem-pergunta.component';

describe('ListagemPerguntaComponent', () => {
  let component: ListagemPerguntaComponent;
  let fixture: ComponentFixture<ListagemPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPerguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
