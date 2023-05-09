import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Instituicao } from "src/app/utils/models/instituicao";
import { Prestador } from "src/app/utils/models/prestador/prestador";
import { RequestService } from "src/app/utils/services/request.service";
import { PrestadorService } from "../../services/prestador.service";
import { Observable } from "rxjs";

@Component({
    selector: 'listagem-prestador-component',
    templateUrl: 'listagem-prestador.component.html',
    styleUrls: ['listagem-prestador.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ListagemPrestadorComponent implements OnInit {

    public listaPrestadores!: Array<Prestador>;

    prestadores$!: Observable<Prestador[]>;

    constructor(
        private _router: Router,
        private requestService: RequestService,
        private _prestadorService: PrestadorService
    ) {
    }

    ngOnInit(): void {
        // this.requestService.buscaListaPrestador().subscribe(listaPrestadores => {
        //     this.listaPrestadores = listaPrestadores;
        // });

        this.prestadores$ = this._prestadorService.getPrestadores();
    }

    public idade = (dataNascimento: Date): number => {
        var today = new Date();
        var idade = today.getFullYear() - dataNascimento.getFullYear();
        var m = today.getMonth() - dataNascimento.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dataNascimento.getDate())) {
            idade--;
        }
        return idade;
    }

    onAdicionarNovaEntidade(): void {
        this._router.navigate(['prestadores', 'incluir'])
    }

}