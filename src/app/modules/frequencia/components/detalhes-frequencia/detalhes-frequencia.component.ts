import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Subject, takeUntil, switchMap, of, Observable } from 'rxjs';
import httpErrorMessages from 'src/app/utils/constants/http-error-messages';
import { FrequenciaService } from '../../services/frequencia.service';
import { AtestadoFrequencia } from 'src/app/utils/models/atestado-frequencia';
import * as moment from 'moment';
import { ListaEntidadeConfiguracao } from 'src/app/utils/components/lista-entidade/models/lista-entidade-configuracao';
import { MatDialog } from '@angular/material/dialog';
import { DialogFrequenciaComponent } from '../dialogs/dialog-frequencia/dialog-frequencia.component';

@Component({
  selector: 'app-detalhes-frequencia',
  templateUrl: './detalhes-frequencia.component.html'
})
export class DetalhesFrequenciaComponent implements OnInit {

  public entidade: any;
  public frequencias$!: Observable<AtestadoFrequencia[]>;
  public filtros!: FormGroup;

  public entidadeConfig: ListaEntidadeConfiguracao = {
    exibirAvatar: false,
    exibirCarregamento: true,
    exibirIdentificador: true,
    exibirEdicao: false,
  }

  constructor(
    public dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _frequenciaService: FrequenciaService
  ) {
    this.filtros = this._formBuilder.group({
      id: [null, []],
      nome: [null, []]
    });

    moment.locale('pt-br');
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this._frequenciaService.getFrequenciasPorProcesso(params["id"]).subscribe(result => {
        this.entidade = result;
        this.frequencias$ = new Observable(observer => {
          observer.next(this.entidade.atestadosFrequencia);
          observer.complete();
        });
      });
    })
  }

  public totalCumprido(frequencias: AtestadoFrequencia[]) {


    return frequencias && frequencias.length > 0 ? frequencias.reduce((partialSum, a) => partialSum + this.horasFrequencia(a), 0) : 0;

  }

  public horasFrequencia(atestadoFrequencia: AtestadoFrequencia): number {
    return moment(atestadoFrequencia.dt_saida).diff(moment(atestadoFrequencia.dt_entrada), 'hour');
  }

  public formataHorario(horario: Date): string {
    return moment(horario).format("LLL");
  }


  abreDialogFrequencia(): void {
    const dialogRef = this.dialog.open(DialogFrequenciaComponent, { data: {}, });

    dialogRef.afterClosed().subscribe((result: AtestadoFrequencia) => {
      if (result) {
        (result as any).processoId = this.entidade.id;
        this._frequenciaService.postFrequencia(result).subscribe(() => {

        });
      }
    });

  }


} 
