import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, last, map, of, switchMap, takeUntil } from 'rxjs';
import { Pergunta } from 'src/app/utils/models/prestador/entidades/pergunta/pergunta';
import { PerguntaService } from '../../services/pergunta.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import httpErrorMessages from 'src/app/utils/constants/http-error-messages';

@Component({
  selector: 'app-detalhes-pergunta',
  templateUrl: './detalhes-pergunta.component.html',
  styleUrls: ['./detalhes-pergunta.component.scss']
})
export class DetalhesPerguntaComponent {

  @Input() pergunta!: string;

  form!: FormGroup;

  private _destroyed$: Subject<void>;
  entidade$!: Observable<Pergunta | null>;

  constructor(
    private _router: Router,
    private _matSnackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _perguntaService: PerguntaService,
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
          return this._perguntaService.getPergunta(params['id']);
        return of(new Pergunta());
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
    this.form = this._formBuilder.group({
      id: [null, []],
      pergunta: [null, [Validators.required]],
      ativo: [true, []]
    })
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      throw new Error('Campos obrigatórios devem ser preenchidos!');
    }
    const pergunta = this.form.value as Pergunta;
    this._perguntaService.postPergunta(pergunta).subscribe({
      next: (res) => {
        this._matSnackBar.open(`Pergunta ${res.id} cadastrada! :)`, "OK", { duration: 2000 });

        this._router.navigate(['pergunta', res.id]);

      },
      error: (error: HttpErrorResponse) => {
        this._matSnackBar.open(httpErrorMessages[`${error.status}`], 'OK');
      }
    });
  }
}
