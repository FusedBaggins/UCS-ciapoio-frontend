import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable, startWith, debounceTime, switchMap } from 'rxjs';
import { ListaEntidadeConfiguracao } from 'src/app/utils/components/lista-entidade/models/lista-entidade-configuracao';
import { AtestadoComparecimento } from 'src/app/utils/models/atestado-comparecimento';
import { EntrevistaService } from '../../services/entrevista.service';

@Component({
  selector: 'app-listagem-entrevista-grid',
  templateUrl: './listagem-entrevista-grid.component.html',
  styleUrls: ['./listagem-entrevista-grid.component.scss']
})
export class ListagemEntrevistaGridComponent {
  public filtros!: FormGroup;
  public entrevista$!: Observable<AtestadoComparecimento[]>;

  public entidadeConfig: ListaEntidadeConfiguracao = {
    exibirAvatar: false,
    exibirCarregamento: true,
    exibirIdentificador: true,
    exibirEdicao: true,
  }

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _entrevistaService: EntrevistaService,
  ) {
    this.filtros = this._formBuilder.group({
      id: [null, []],
      nome: [null, []],
      observacoes: [null, []]
    });
  }

  ngOnInit(): void {
    this.entrevista$ = this.filtros.valueChanges.pipe(
      startWith({}),
      debounceTime(500),
      switchMap((filtros: any) => {
        return this._entrevistaService.getEntrevistas(filtros)
      })
    );
  }

  exibirData(data: Date) {
    const dataMoment = moment(data);
    return dataMoment.format('DD/MM/yyyy HH:mm');
  }
}
