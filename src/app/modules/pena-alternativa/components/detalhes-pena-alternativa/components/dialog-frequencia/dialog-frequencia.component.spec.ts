import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFrequenciaComponent } from './dialog-frequencia.component';

describe('DialogFrequenciaComponent', () => {
  let component: DialogFrequenciaComponent;
  let fixture: ComponentFixture<DialogFrequenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFrequenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFrequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
