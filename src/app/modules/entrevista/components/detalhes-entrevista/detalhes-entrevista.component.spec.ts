import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEntrevistaComponent } from './detalhes-entrevista.component';

describe('DetalhesEntrevistaComponent', () => {
  let component: DetalhesEntrevistaComponent;
  let fixture: ComponentFixture<DetalhesEntrevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesEntrevistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
