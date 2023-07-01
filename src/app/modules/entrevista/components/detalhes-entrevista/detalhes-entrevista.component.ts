import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject, Observable, switchMap, takeUntil, of } from 'rxjs';
import httpErrorMessages from 'src/app/utils/constants/http-error-messages';
import { AtestadoComparecimento } from 'src/app/utils/models/atestado-comparecimento';
import { EntrevistaService } from '../../services/entrevista.service';
import * as moment from 'moment';

@Component({
  selector: 'app-detalhes-entrevista',
  templateUrl: './detalhes-entrevista.component.html',
  styleUrls: ['./detalhes-entrevista.component.scss'],
})
export class DetalhesEntrevistaComponent {
  @Input() pergunta!: string;

  form!: FormGroup;

  private _destroyed$: Subject<void>;
  entidade$!: Observable<AtestadoComparecimento | null>;

  constructor(
    private _router: Router,
    private _matSnackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _entrevistaService: EntrevistaService,
    private _activatedRoute: ActivatedRoute,
  ) {
    this._destroyed$ = new Subject();
  }

  ngOnInit(): void {
    this.criarForm();
    this.entidade$ = this._activatedRoute.params.pipe(
      takeUntil(this._destroyed$),
      switchMap((params: Params) => {
        if (params['id'])
          return this._entrevistaService.getEntrevista(params['id']);
        return of(new AtestadoComparecimento());
      })
    )

    this.entidade$.subscribe((valor) => {
      if (valor) {
        this.form.patchValue(valor);
      }
    });
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  criarForm(): void {
    const dataAtual = new Date().toISOString().slice(0, 16); // Obtém a data atual no formato 'YYYY-MM-DDTHH:mm'

    this.form = this._formBuilder.group({
      id: [null, []],
      nome: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      data: [moment().format('YYYY-MM-DDTHH:mm'), [Validators.required]],
      observacoes: [null, [Validators.required]],
    })
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      throw new Error('Campos obrigatórios devem ser preenchidos!');
    }
    const entrevista = this.form.value as AtestadoComparecimento;
    this._entrevistaService.postEntrevista(entrevista).subscribe({
      next: (res) => {
        this._matSnackBar.open(`Entrevista ${res.id} cadastrada! :)`, "OK", { duration: 2000 });

        this._router.navigate(['entrevistas', res.id]);

      },
      error: (error: HttpErrorResponse) => {
        this._matSnackBar.open(httpErrorMessages[`${error.status}`], 'OK');
      }
    });
  }

  onAbrirCadastroPrestador() {
    const entrevista = {
      nome: this.form.value.nome,
      telefone: this.form.value.telefone,
      entrevistaId: this.form.value.id
    };
    this._router.navigate(['prestador', 'incluir'], { queryParams: entrevista });

  }
}
