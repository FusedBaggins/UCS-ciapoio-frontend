import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Observable, startWith, debounceTime, switchMap } from 'rxjs';

import { Vara } from '../../models/vara';
import { VaraService } from '../../services/vara.service';
import { ListaEntidadeConfiguracao } from 'src/app/utils/components/lista-entidade/models/lista-entidade-configuracao';

@Component({
  selector: 'app-lista-vara',
  templateUrl: './lista-vara.component.html',
  styleUrls: ['./lista-vara.component.scss']
})
export class ListaVaraComponent {

  public filtros!: FormGroup;
  public varas$!: Observable<Vara[]>;

  public entidadeConfig: ListaEntidadeConfiguracao = {
    exibirAvatar: false,
    exibirCarregamento: true,
    exibirIdentificador: true,
    exibirEdicao:true,
  }

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _varaService: VaraService
  ) {
    this.filtros = this._formBuilder.group({
      id: [null, []],
      nome: [null, []]
    });
  }

  ngOnInit(): void {
    this.varas$ = this.filtros.valueChanges.pipe(
      startWith({}),
      debounceTime(500),
      switchMap((filtros: any) => {
        return this._varaService.getVaras(filtros);
      })
    );
  }

  onAdicionarNovaVaraPenal(): void {
    this._router.navigate(['vara-penal','incluir']);
  }

}
