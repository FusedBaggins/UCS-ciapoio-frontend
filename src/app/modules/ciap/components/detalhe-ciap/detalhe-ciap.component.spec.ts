import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCiapComponent } from './detalhe-ciap.component';

describe('DetalheCiapComponent', () => {
  let component: DetalheCiapComponent;
  let fixture: ComponentFixture<DetalheCiapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheCiapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheCiapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
