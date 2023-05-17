import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPerguntaComponent } from './detalhes-pergunta.component';

describe('DetalhesPerguntaComponent', () => {
  let component: DetalhesPerguntaComponent;
  let fixture: ComponentFixture<DetalhesPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesPerguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
