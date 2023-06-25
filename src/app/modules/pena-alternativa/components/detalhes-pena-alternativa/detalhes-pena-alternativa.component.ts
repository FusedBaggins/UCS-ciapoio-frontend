import { Component, OnInit } from "@angular/core";
import { PenaAlternativaService } from "../../services/pena-alternativa.service";
import { ActivatedRoute, Params } from "@angular/router";
import { AlternativaPenal } from "src/app/utils/models/prestador/entidades/alternativa-penal/alternativa-penal";

@Component({
  selector: 'app-detalhes-pena-alternativa',
  templateUrl: './detalhes-pena-alternativa.component.html'
})

export class DetalhesPenaAlternativaComponent implements OnInit {


  public alternativaPenal?: AlternativaPenal;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _penaAlternativaService: PenaAlternativaService) {
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this._penaAlternativaService.getAlternativaPenal(params["id"]).subscribe(a => {
        this.alternativaPenal = a;
        

      });

    });
  }

}


