import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInstituicaoParceiraComponent } from './select-instituicao-parceira.component';

describe('SelectInstituicaoParceiraComponent', () => {
  let component: SelectInstituicaoParceiraComponent;
  let fixture: ComponentFixture<SelectInstituicaoParceiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInstituicaoParceiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectInstituicaoParceiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
