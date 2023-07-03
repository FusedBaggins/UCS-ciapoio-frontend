import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Instituicao } from "src/app/utils/models/instituicao";
import { Prestador } from "src/app/utils/models/prestador/prestador";
import { PrestadorService } from "../../services/prestador.service";
import { Observable, debounceTime, startWith, switchMap } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'listagem-prestador-component',
    templateUrl: 'listagem-prestador.component.html',
    styleUrls: ['listagem-prestador.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ListagemPrestadorComponent implements OnInit {

    public filtros: FormGroup;
    public listaPrestadores!: Array<Prestador>;

    prestadores$!: Observable<Prestador[]>;

    constructor(
        private _router: Router,
        private _prestadorService: PrestadorService,
        private _formBuilder: FormBuilder,

    ) {
        this.filtros = this._formBuilder.group({
            id: [null, []],
            nome: [null, []]
        });
    }

    ngOnInit(): void {
        this.prestadores$ = this.filtros.valueChanges.pipe(
          startWith({}),
          debounceTime(500),
          switchMap((filtros: any) => {
            return this._prestadorService.getPrestadores(filtros)
          })
        );
    }


    onAdicionarNovoPrestador(): void {
        this._router.navigate(['prestador', 'incluir']);
    }
}
