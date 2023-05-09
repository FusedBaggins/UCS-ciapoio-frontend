import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEntidadeComponent } from './detalhe-entidade.component';

describe('DetalheEntidadeComponent', () => {
  let component: DetalheEntidadeComponent;
  let fixture: ComponentFixture<DetalheEntidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheEntidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
