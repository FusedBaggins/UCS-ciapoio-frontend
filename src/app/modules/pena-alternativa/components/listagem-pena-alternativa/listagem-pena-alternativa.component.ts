import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime, of, startWith, switchMap } from 'rxjs';
import { ListaEntidadeConfiguracao } from 'src/app/utils/components/lista-entidade/models/lista-entidade-configuracao';
import { PenaAlternativaService } from '../../services/pena-alternativa.service';
import { AgendamentoPrestacao } from 'src/app/utils/models/agendamento-prestacao';
import { Processo } from 'src/app/utils/models/processo';

@Component({
  selector: 'app-listagem-pena-alternativa',
  templateUrl: './listagem-pena-alternativa.component.html'
})
export class ListagemPenaAlternativaComponent {
  public filtros: FormGroup;
  public processo$!: Observable<Processo[]>;

  public entidadeConfig: ListaEntidadeConfiguracao = {
    exibirAvatar: false,
    exibirCarregamento: true,
    exibirIdentificador: false,
  }

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _penaAlternativaService: PenaAlternativaService,
  ) {
    this.filtros = this._formBuilder.group({
      id: [null, []],
      nome: [null, []]
    });
  }

  ngOnInit(): void {
    this.processo$ = this.filtros.valueChanges.pipe(
      startWith({}),
      debounceTime(500),
      switchMap((filtros: any) => {
        return this._penaAlternativaService.getProcessosPenaAlternativa(filtros)
      })
    );
  }
}
