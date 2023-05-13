import { Router } from '@angular/router';
import { Component, ContentChild, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';

import { Observable, delay, tap } from 'rxjs';

import { ListaEntidadeConfiguracao } from './models/lista-entidade-configuracao';

@Component({
  selector: 'app-lista-entidade',
  templateUrl: './lista-entidade.component.html',
  styleUrls: ['./lista-entidade.component.scss']
})
export class ListaEntidadeComponent implements OnInit, OnChanges {

  @Input() rotaEntidade!: string[];
  @Input() config!: ListaEntidadeConfiguracao;
  @Input('entidades') entidades$!: Observable<any[]>;

  @ContentChild('titulo') tituloTemplate!: TemplateRef<any>;
  @ContentChild('entidades') entidadesTemplate!: TemplateRef<any>;
  @ContentChild('nenhumaEntidade') nenhumaEntidadeTemplate!: TemplateRef<any>;

  loading!: boolean;

  constructor(private _router: Router) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.config) {
      this.config = {
        exibirEdicao: true,
        exibirAvatar: false,
        exibirCarregamento: true,
        exibirIdentificador: true,
      }
    }

    if (changes['entidades$'].currentValue && this.config.exibirCarregamento) {
      this.loading = true;
      this.entidades$ = this.entidades$.pipe(
        delay(5000),
        tap(() => {
          this.loading = false;
        })
      );
    }
  }

  onEditarEntidade(id: number): void {
    this._router.navigate([...this.rotaEntidade, id]);
  }
}
