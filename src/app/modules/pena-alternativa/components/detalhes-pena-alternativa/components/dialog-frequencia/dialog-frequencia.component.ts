import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dialog-frequencia',
  templateUrl: './dialog-frequencia.component.html',
  styleUrls: ['./dialog-frequencia.component.scss']
})
export class DialogFrequenciaComponent {
  form!: FormGroup;
  private _destroyed$: Subject<void>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogFrequenciaComponent>,
    private _formBuilder: FormBuilder
  ) {

    this._destroyed$ = new Subject();
    this._criarForm();
    if (data) {
      if (data.frequencia) {
        this.form.patchValue(data.frequencia);
      }
      else if (data.agendamentoPrestacao) {
        this.form.get('horario_inicio')?.patchValue(data.agendamentoPrestacao.horario_inicio);
        this.form.get('horario_fim')?.patchValue(data.agendamentoPrestacao.horario_fim);
      }
    }
  }

  private _criarForm(): void {
    this.form = this._formBuilder.group({
      id: [null, []],
      data_inicial: [new Date(), [Validators.required]],
      horario_inicio: [null, [Validators.required]],
      horario_fim: [null, [Validators.required]],
      observacoes: [null, []],
      idTemporario: [null, []],
    })
  }

  clickAdicionar(): void {
    this.dialogRef.close(this.form.getRawValue());
  }
}
