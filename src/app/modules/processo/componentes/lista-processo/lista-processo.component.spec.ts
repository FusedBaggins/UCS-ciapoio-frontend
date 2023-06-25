import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProcessoComponent } from './lista-processo.component';

describe('ListaProcessoComponent', () => {
  let component: ListaProcessoComponent;
  let fixture: ComponentFixture<ListaProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProcessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
