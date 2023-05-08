import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePrestadorComponent } from './detalhe-prestador.component';

describe('DetalhePrestadorComponent', () => {
  let component: DetalhePrestadorComponent;
  let fixture: ComponentFixture<DetalhePrestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhePrestadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhePrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
