import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVaraComponent } from './lista-vara.component';

describe('ListaVaraComponent', () => {
  let component: ListaVaraComponent;
  let fixture: ComponentFixture<ListaVaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
