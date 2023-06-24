import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Observable, startWith, debounceTime, switchMap } from 'rxjs';
import { ListaEntidadeConfiguracao } from 'src/app/utils/components/lista-entidade/models/lista-entidade-configuracao';
import { AtestadoFrequencia } from 'src/app/utils/models/atestado-frequencia';
import { FrequenciaService } from '../../services/frequencia.service';
import * as moment from 'moment';

@Component({
  selector: 'app-lista-frequencia',
  templateUrl: './lista-frequencia.component.html'
})
export class ListaFrequenciaComponent {

  public filtros!: FormGroup;
  public frequencias$!: Observable<AtestadoFrequencia[]>;

  public entidadeConfig: ListaEntidadeConfiguracao = {
    exibirAvatar: false,
    exibirCarregamento: true,
    exibirIdentificador: true,
    exibirEdicao: true,
  }

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _freqeunciaService: FrequenciaService
  ) {
    this.filtros = this._formBuilder.group({
      id: [null, []],
      nome: [null, []]
    });
  }

  ngOnInit(): void {
    this.frequencias$ = this._freqeunciaService.getFrequenciasAgrupadoPorProcesso(new AtestadoFrequencia());
  }

  public totalCumprido(frequencias: AtestadoFrequencia[]) {


    return frequencias && frequencias.length > 0 ? frequencias.reduce((partialSum, a) => partialSum + (moment(a.dt_saida).diff(moment(a.dt_entrada), 'hour')), 0) : 0;

  }

  

}
