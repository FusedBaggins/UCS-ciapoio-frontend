import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, debounceTime, startWith, switchMap } from 'rxjs';
import { Instituicao } from 'src/app/utils/models/instituicao';
import { EntidadeParceiraService } from '../../services/entidade-parceira.service';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-listagem-entidade-parceira',
  templateUrl: './listagem-entidade-parceira.component.html',
  styleUrls: ['./listagem-entidade-parceira.component.scss']
})
export class ListagemEntidadeParceiraComponent implements OnInit {

  public filtros: FormGroup;
  public instituicoes$!: Observable<Instituicao[]>;

  maxColumns:number = 4;
  rowSpan:number = 4;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _breakPointObserver: BreakpointObserver,
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

    this._breakPointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web,
    ]).subscribe({
      next: ((value: BreakpointState) => {
        for (const query of Object.keys(value.breakpoints)) {
          if (value.breakpoints[query]) {
            this._breakPointAction(query);
          }
        }
      })
    })
  }

  private _breakPointAction(breakpoint: any) {
    switch (breakpoint) {
      case breakpoint.Handset:
        console.log("alo");
        
        this.maxColumns = 4;
        this.rowSpan = 4;
        break;
      case breakpoint.Tablet:
      case breakpoint.Tablet:
      default:
        this.maxColumns = 12;
        this.rowSpan = 6;
        break

    }
  }

  onAdicionarNovaEntidade(): void {
    this._router.navigate(['instituicao-parceira', 'incluir']);
  }
}
