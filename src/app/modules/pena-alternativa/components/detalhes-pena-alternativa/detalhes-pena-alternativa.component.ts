import { Component, OnInit } from "@angular/core";
import { PenaAlternativaService } from "../../services/pena-alternativa.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { DialogFrequenciaComponent } from "./components/dialog-frequencia/dialog-frequencia.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AgendamentoPrestacao } from "src/app/utils/models/agendamento-prestacao";
import { HttpErrorResponse } from "@angular/common/http";
import httpErrorMessages from "src/app/utils/constants/http-error-messages";
import { Observable, Subject, catchError, finalize, of, switchMap, takeUntil, tap, throwError } from "rxjs";
import * as moment from "moment";

@Component({
  selector: 'app-detalhes-pena-alternativa',
  templateUrl: './detalhes-pena-alternativa.component.html'
})

export class DetalhesPenaAlternativaComponent implements OnInit {

  form!: FormGroup;
  frequencias: any[] = [];
  public agendamentoPrestacao?: Observable<AgendamentoPrestacao | null>;
  private _destroyed$: Subject<void>;


  constructor(
    private _matDialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _penaAlternativaService: PenaAlternativaService) {
    this._destroyed$ = new Subject();
  }

  ngOnInit(): void {
    this._criarForm();
    this.agendamentoPrestacao = this._activatedRoute.params.pipe(
      takeUntil(this._destroyed$),
      switchMap((params: Params) => {
        if (params['id']) {
          this.form.get('processoId')?.patchValue(params['id']);
          return this._penaAlternativaService.getAlternativaPenal(params['id']).pipe(
            catchError((error) => {
              if (error.status === 404) {
                return of(new AgendamentoPrestacao());
              }
              return of(new AgendamentoPrestacao());
            }),
            tap((retorno) => {
              if (retorno.frequencias)
                this.frequencias = retorno.frequencias;
            })
          );
        } else {
          return of(new AgendamentoPrestacao());
        }
      })
    )



    this.agendamentoPrestacao.subscribe((valor: any) => {
      if (valor) {
        this.form.patchValue(valor);
      }
    });
  }

  private _criarForm(): void {
    this.form = this._formBuilder.group({
      id: [null, []],
      horario_inicio: [null, [Validators.required]],
      horario_fim: [null, [Validators.required]],
      data_inicial: [new Date(), [Validators.required]],
      segunda: [false, []],
      terca: [false, []],
      quarta: [false, []],
      quinta: [false, []],
      sexta: [false, []],
      sabado: [false, []],
      domingo: [false, []],
      processoId: [null, [Validators.required]]
    })
  }

  private _atualizarPenaAlternativa(pena: AgendamentoPrestacao): void {
    this._penaAlternativaService.postAlternativaPenal(pena).subscribe({
      next: (res) => {
        const mensagem: string = (!this.form.get('id')?.value) ? 'cadastrada' : 'atualizada';
        this._matSnackBar.open(`Alternativa penal ${mensagem}! :)`, "OK", { duration: 2000 });
        if (!this.form.get('id')?.value) this._router.navigate(['agendamento-prestacao', res.id]);
      },
      error: (error: HttpErrorResponse) => {
        this._matSnackBar.open(httpErrorMessages[`${error.status}`], 'OK');
      }
    });
  }

  onSubmit(): void {
    try {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        throw new Error('Campos obrigatórios devem ser preenchidos!');
      }

      let form = this.form.getRawValue();
      form.frequencias = this.frequencias.filter(x => x.edicao || x.idTemporario);
      form.frequencias.forEach((x: any) => {
        x.idTemporario = null;
        x.edicao = null;
      });
      this._atualizarPenaAlternativa(form);
    }
    catch (e: any) {
      this._matSnackBar.open(e.message, 'OK', { duration: 2000 });
    }
  }

  exibirData(data: Date): string {
    const dataMoment = moment(data);
    return dataMoment.format('DD/MM/YYYY');
  }

  onExibirFrequencia(frequencia?: any): void {
    const config: MatDialogConfig = {
      width: '45vw',
      data: {
        agendamentoPrestacao: this.form.getRawValue(),
        frequencia
      }
    }

    const dialogRef: MatDialogRef<DialogFrequenciaComponent> = this._matDialog.open(DialogFrequenciaComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.frequencias = this.frequencias || [];

        if (result.idTemporario) {
          const index = this.frequencias.findIndex(t => t.idTemporario === result.idTemporario);
          if (index !== -1) {
            this.frequencias[index] = result;
          }
        }

        else {
          const index = this.frequencias.findIndex(t => t.id === result.id);
          if (index !== -1 && result.id) {
            result.edicao = true;
            this.frequencias[index] = result;
          } else {
            result.idTemporario = this.frequencias.length + 1;
            this.frequencias.push(result);
          }
        }
      }
    });
  }
}


