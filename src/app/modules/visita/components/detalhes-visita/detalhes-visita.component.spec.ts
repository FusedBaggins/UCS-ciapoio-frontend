import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesVisitaComponent } from './detalhes-visita.component';

describe('DetalhesVisitaComponent', () => {
  let component: DetalhesVisitaComponent;
  let fixture: ComponentFixture<DetalhesVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesVisitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
