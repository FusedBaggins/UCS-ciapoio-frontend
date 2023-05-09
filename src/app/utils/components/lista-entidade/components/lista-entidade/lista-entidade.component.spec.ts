import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntidadeComponent } from './lista-entidade.component';

describe('ListaEntidadeComponent', () => {
  let component: ListaEntidadeComponent;
  let fixture: ComponentFixture<ListaEntidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEntidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
