import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime, startWith, switchMap } from 'rxjs';
import { Visita } from 'src/app/utils/models/visita';
import { VisitaService } from '../../services/visita.service';
import * as moment from 'moment';
import { ListaEntidadeConfiguracao } from 'src/app/utils/components/lista-entidade/models/lista-entidade-configuracao';

@Component({
  selector: 'app-listagem-visita',
  templateUrl: './listagem-visita.component.html',
  styleUrls: ['./listagem-visita.component.scss']
})
export class ListagemVisitaComponent {
  public filtros: FormGroup;
  public visitas$!: Observable<Visita[]>;

  public entidadeConfig: ListaEntidadeConfiguracao = {
    exibirAvatar: false,
    exibirCarregamento: true,
    exibirIdentificador: false,
  }

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _visitaService: VisitaService,
  ) {
    this.filtros = this._formBuilder.group({
      id: [null, []],
      nome: [null, []]
    });
  }

  ngOnInit(): void {
    this.visitas$ = this.filtros.valueChanges.pipe(
      startWith({}),
      debounceTime(500),
      switchMap((filtros: any) => {
        return this._visitaService.getVisitas(filtros)
      })
    );
  }

  calcularDiasRestante(visita:Visita): number {
    if(visita.prazoAceite && !visita.dataVisita){
      let dataAtual = moment();
      let dataPrazoAceite = moment(visita.prazoAceite);
      var diferenca = dataPrazoAceite.diff(dataAtual, 'days');
      return diferenca;
    }
    return 0;
  }

  prazoEmAberto(visita: Visita){
    let dataPrazoAceite = moment(visita.prazoAceite);
    return dataPrazoAceite.isAfter(moment());
  }

  onAdicionarNovaEntidade(): void {
    this._router.navigate(['visita', 'incluir']);
  }
}
