import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { SelectDefault } from '../selectModels/selectDefault';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent {
  form!: FormGroup;
  @Input('form') set _(abstractControl: AbstractControl) {
    this.form = (abstractControl) as FormGroup;
  }

  onAtualizarCidadeSelecionada(cidade: SelectDefault): void {
    this.form.get('cidadeId')?.patchValue(cidade);
  }
}
