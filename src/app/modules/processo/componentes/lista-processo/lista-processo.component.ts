import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Observable, startWith, debounceTime, switchMap } from 'rxjs';

import { Processo } from 'src/app/utils/models/processo';
import { ProcessoService } from '../../services/processo.service';
import { ListaEntidadeConfiguracao } from 'src/app/utils/components/lista-entidade/models/lista-entidade-configuracao';

@Component({
  selector: 'app-lista-processo',
  templateUrl: './lista-processo.component.html',
  styleUrls: ['./lista-processo.component.scss']
})
export class ListaProcessoComponent {
  public filtros: FormGroup;
  public processos$!: Observable<Processo[]>;

  public entidadeConfig: ListaEntidadeConfiguracao = {
    exibirAvatar: false,
    exibirCarregamento: true,
    exibirIdentificador: false,
  }
  
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _processoService: ProcessoService,
  ) {
    this.filtros = this._formBuilder.group({
      id: [null, []],
      nome: [null, []]
    });
  }

  ngOnInit(): void {
    this.processos$ = this.filtros.valueChanges.pipe(
      startWith({}),
      debounceTime(500),
      switchMap((filtros: any) => {
        return this._processoService.getProcessos(filtros);
      })
    );
  }

  onAdicionarNovoProcesso(): void {
    this._router.navigate(['processo', 'incluir']);
  }
}
