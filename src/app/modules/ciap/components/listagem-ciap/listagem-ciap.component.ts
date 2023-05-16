import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { Observable, debounceTime, startWith, switchMap } from "rxjs";

import { CiapService } from "../../services/ciap.service";
import { Instituicao } from "src/app/utils/components/instituicao/models/instituicao";

@Component({
    selector: 'listagem-ciap-component',
    templateUrl: 'listagem-ciap.component.html',
    styleUrls: ['listagem-ciap.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ListagemCiapComponent implements OnInit {

    public filtros: FormGroup;
    public instituicoes$!: Observable<Instituicao[]>;

    constructor(
        private _router: Router,
        private _ciapService: CiapService,
        private _formBuilder: FormBuilder,
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
                return this._ciapService.getInstituicoes(filtros)
            })
        );
    }

    onAdicionarNovaEntidade(): void {
        this._router.navigate(['ciap', 'incluir']);
    }
}