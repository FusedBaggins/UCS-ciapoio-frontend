import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Subject, of, switchMap, takeUntil } from 'rxjs';

import { Processo } from 'src/app/utils/models/processo';
import { ProcessoService } from '../../services/processo.service';
import httpErrorMessages from 'src/app/utils/constants/http-error-messages';
import { Prestador } from 'src/app/utils/models/prestador/prestador';
import { SelectDefault } from 'src/app/utils/components/selectModels/selectDefault';

@Component({
  selector: 'app-detalhes-processo',
  templateUrl: './detalhes-processo.component.html',
  styleUrls: ['./detalhes-processo.component.scss']
})
export class DetalhesProcessoComponent {
  form!: FormGroup;

  private _destroyed$: Subject<void>;

  constructor(
    private _router: Router,
    private _matSnackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _processoService: ProcessoService,
  ) {
    this._destroyed$ = new Subject();
  }

  ngOnInit(): void {
    this.criarForm();
    this._verficiarPossuiMulta();

    this._activatedRoute.params.pipe(
      takeUntil(this._destroyed$),
      switchMap((params: Params) => {
        if (params['id'])
          return this._processoService.getProcesso(params['id']);
        return of(null);
      })
    ).subscribe({
      next: (processo: Processo | null) => {
        if (processo) {
          this.form.patchValue(processo);
          return;
        }
      }, error: (error: HttpErrorResponse) => {
        if (error.status === 404) this._router.navigate(['processo', 'incluir']);
      }
    });
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  criarForm(): void {
    this.form = this._formBuilder.group({
      id: [null, []],
      nro_processo: [null, []],
      nro_artigo_penal: [null, []],
      pena_originaria: [null, []],
      pena_originaria_regime: [null, []],
      inciso: [null, []],
      detalhamento: [null, []],
      prd: [null, []],
      prd_descricao: [null, []],
      horas_cumprir: [null, []],
      qtd_penas_anteriores: [null, []],
      possui_multa: [null, []],
      valor_a_pagar: [{ value: false, disabled: true }, []],
      instituicao: [null, []],
      prestador: [null, []],
      vara: [null, []],
    });
  }

  private _atualizarProcesso(processo: Processo): void {
    this._processoService.postProcesso(processo).subscribe({
      next: (res) => {
        const mensagem: string = (!this.form.get('id')?.value) ? 'cadastrado' : 'atualizado';
        this._matSnackBar.open(`Processo ${res?.id} ${mensagem}! :)`, "OK", { duration: 2000 });
        if (!this.form.get('id')?.value) this._router.navigate(['processo', res.id]);
      },
      error: (error: HttpErrorResponse) => {
        this._matSnackBar.open(httpErrorMessages[`${error.status}`], 'OK');
      }
    });
  }

  private _verficiarPossuiMulta(): void {
    this.form.get('possui_multa')?.valueChanges.pipe(
      takeUntil(this._destroyed$)
    ).subscribe({
      next: (possuiMulta: boolean) => {
        const valorMultaControl: AbstractControl | null = this.form.get('valor_a_pagar');

        if (possuiMulta) {
          valorMultaControl?.enable();
          valorMultaControl?.setValidators(Validators.required);
        } else {
          valorMultaControl?.reset()
          valorMultaControl?.disable();
          valorMultaControl?.clearValidators();
        }

        valorMultaControl?.updateValueAndValidity()

      }
    })
  }

  onSubmit(): void {
    try {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        throw new Error('Campos obrigatórios devem ser preenchidos!');
      }

      this._atualizarProcesso(this.form.getRawValue());

    }
    catch (e: any) {
      this._matSnackBar.open(e.message, 'OK', { duration: 2000 });
    }

  }

  onAtualizarPrestadorSelecionado(prestador: SelectDefault): void {
    this.form.get('prestador')?.patchValue(prestador);
  }

  onAtualizarVaraCriminalSelecionado(vara: SelectDefault): void {
    this.form.get('vara')?.patchValue(vara);
  }

}
