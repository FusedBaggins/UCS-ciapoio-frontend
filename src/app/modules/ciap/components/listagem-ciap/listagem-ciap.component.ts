import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { Instituicao } from "src/app/utils/models/instituicao";
import { InstituicaoService } from "src/app/utils/components/instituicao/services/instituicao.service";

@Component({
    selector: 'listagem-ciap-component',
    templateUrl: 'listagem-ciap.component.html',
    styleUrls: ['listagem-ciap.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ListagemCiapComponent implements OnInit {

    public listaCiaps!: Array<Instituicao>;
    public instituicoes$!: Observable<Instituicao[]>;

    constructor(
        private _router: Router,
        private _instituicaoService: InstituicaoService
    ) {
    }

    ngOnInit(): void {
        this.instituicoes$ = this._instituicaoService.getInstituicoes(1);
    }

    onAdicionarNovaEntidade(): void {
        this._router.navigate(['ciap', 'incluir']);
    }

}