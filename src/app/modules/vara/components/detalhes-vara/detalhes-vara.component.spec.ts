import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesVaraComponent } from './detalhes-vara.component';

describe('DetalhesVaraComponent', () => {
  let component: DetalhesVaraComponent;
  let fixture: ComponentFixture<DetalhesVaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesVaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesVaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
