import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Instituicao } from "src/app/utils/models/instituicao";
import { RequestService } from "src/app/utils/services/request.service";

@Component({
    selector: 'listagem-ciap-component',
    templateUrl: 'listagem-ciap.component.html',
    styleUrls: ['listagem-ciap.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ListagemCiapComponent implements OnInit {

    public listaCiaps!: Array<Instituicao>;

    constructor(private requestService: RequestService) {
    }

    ngOnInit(): void {
        this.requestService.buscaListaCiap().subscribe(listaCiaps => {
            this.listaCiaps = listaCiaps;
        });
    }

}