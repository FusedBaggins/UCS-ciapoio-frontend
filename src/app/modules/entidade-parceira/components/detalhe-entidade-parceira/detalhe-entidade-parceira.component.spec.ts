import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEntidadeParceiraComponent } from './detalhe-entidade-parceira.component';

describe('DetalheEntidadeParceiraComponent', () => {
  let component: DetalheEntidadeParceiraComponent;
  let fixture: ComponentFixture<DetalheEntidadeParceiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheEntidadeParceiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheEntidadeParceiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
