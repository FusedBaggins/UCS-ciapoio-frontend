import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, debounceTime, startWith, switchMap } from 'rxjs';
import { Instituicao } from 'src/app/utils/models/instituicao';
import { EntidadeParceiraService } from '../../services/entidade-parceira.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-entidade-parceira',
  templateUrl: './listagem-entidade-parceira.component.html',
  styleUrls: ['./listagem-entidade-parceira.component.scss']
})
export class ListagemEntidadeParceiraComponent implements OnInit {

  public filtros: FormGroup;
  public instituicoes$!: Observable<Instituicao[]>;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _entidadeParceiraService: EntidadeParceiraService,
  ) {

    this.filtros = this._formBuilder.group({
      id: [null, []],
      nome: [null, []]
    });

  }

  ngOnInit(): void {
    this.instituicoes$ = this.filtros.valueChanges.pipe(
      startWith({}),
      debounceTime(500),
      switchMap((filtros: any) => {
        return this._entidadeParceiraService.getInstituicoes(filtros)
      })
    );
  }

  onAdicionarNovaEntidade(): void {
    this._router.navigate(['instituicao-parceira', 'incluir']);
  }
}
