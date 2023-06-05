import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subject, Observable, takeUntil, switchMap, of } from 'rxjs';
import httpErrorMessages from 'src/app/utils/constants/http-error-messages';
import { Visita } from 'src/app/utils/models/visita';
import { VisitaService } from '../../services/visita.service';
import { Prestador } from 'src/app/utils/models/prestador/prestador';
import SituacaoVisitaHelper from 'src/app/utils/functions/situacao-visita-helper';

@Component({
  selector: 'app-detalhes-visita',
  templateUrl: './detalhes-visita.component.html',
  styleUrls: ['./detalhes-visita.component.scss']
})
export class DetalhesVisitaComponent {

  @Input() pergunta!: string;

  form!: FormGroup;
  listaPrestadores!: Prestador[];
  private _destroyed$: Subject<void>;
  entidade$!: Observable<Visita | null>;
  usuarioCiap!: boolean;
  instituicaoSelecionadaControl!: FormControl;
  situacaoSelecionadaControl!: FormControl;
  prestadorSelecionadoControl!: FormControl;

  constructor(
    private _router: Router,
    private _matSnackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _visitaService: VisitaService,
    private _activatedRoute: ActivatedRoute,
  ) {
    this._destroyed$ = new Subject();
    this.listaPrestadores = [];
    this.usuarioCiap = false;
  }

  ngOnInit(): void {
    this.criarForm();
    this.validarDesabilitarCampos();
    this.entidade$ = this._activatedRoute.params.pipe(
      takeUntil(this._destroyed$),
      switchMap((params: Params) => {
        if (params['id'])
          return this._visitaService.getVisita(params['id']);
        return of(new Visita());
      })
    )

    this.entidade$.subscribe((valor) => {
      if (valor) {
        this.form.patchValue(valor);
      }
    });

    if (this.form.value.status) {
      this.situacaoSelecionadaControl.setValue(this.form.value.status);
    }
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  validarDesabilitarCampos() {
    if (this.usuarioCiap) {
      this.form.get('prestadorId')?.disable();
      this.form.get('instituicaoId')?.disable();
      this.form.get('prazoAceite')?.disable();
      this.form.get('observacao')?.disable();
    }
  }

  criarForm(): void {
    this.instituicaoSelecionadaControl = new FormControl('', Validators.required);
    this.prestadorSelecionadoControl = new FormControl('', Validators.required);
    this.situacaoSelecionadaControl = new FormControl('', Validators.required);

    this.form = this._formBuilder.group({
      id: [null, []],
      prestadorId: this.prestadorSelecionadoControl,
      instituicaoId: this.instituicaoSelecionadaControl,
      prazoAceite: [null, [Validators.required]],
      observacao: [null],
      status: this.situacaoSelecionadaControl,
      dataAceite: [null],
      dataVisita: [null],
      motivoReprovacao: [null],
    })
  }

  atualizarInstituicaoSelecionada(valor: any) {
    this.instituicaoSelecionadaControl.setValue(valor);
  }

  atualizarSituacaoSelecionada(valor: any) {
    this.situacaoSelecionadaControl.setValue(valor);
    this.limparMotivoReprovacao(valor);
  }

  limparMotivoReprovacao(situacao: any) {
    if (this.form.controls['motivoReprovacao'].value) {
      const enumRecusado = SituacaoVisitaHelper.RetornarOptionsSituacaoVisita()
        .find(x => x.label == 'Recusado');

      if (enumRecusado?.id == situacao) {
        this.form.controls['motivoReprovacao'].setValue('');
      }
    }
  }

  atualizarPrestadorSelecionado(valor: any) {
    this.prestadorSelecionadoControl.setValue(valor);
  }

  async onSubmit(): Promise<void> {
    console.log(this.form.value);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      throw new Error('Campos obrigatórios devem ser preenchidos!');
    }
    const visita = this.form.value as Visita;
    this._visitaService.postVisita(visita).subscribe({
      next: (res) => {
        this._matSnackBar.open(`Visita ${res.id} cadastrada! :)`, "OK", { duration: 2000 });

        this._router.navigate(['visita', res.id]);

      },
      error: (error: HttpErrorResponse) => {
        this._matSnackBar.open(httpErrorMessages[`${error.status}`], 'OK');
      }
    });
  }
}


