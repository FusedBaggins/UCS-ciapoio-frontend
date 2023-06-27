import { Component, OnInit } from "@angular/core";
import { PenaAlternativaService } from "../../services/pena-alternativa.service";
import { ActivatedRoute, Params } from "@angular/router";
import { AlternativaPenal } from "src/app/utils/models/prestador/entidades/alternativa-penal/alternativa-penal";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { DialogFrequenciaComponent } from "./components/dialog-frequencia/dialog-frequencia.component";

@Component({
  selector: 'app-detalhes-pena-alternativa',
  templateUrl: './detalhes-pena-alternativa.component.html'
})

export class DetalhesPenaAlternativaComponent implements OnInit {

  form!: FormGroup;
  frequencias: any[] = [{
    dt_entrada: '26/06/2023',
    dt_saida: '',
    observacoes: 'Não chegou no horário combinado',
  }];
  public alternativaPenal?: AlternativaPenal;


  constructor(
    private _matDialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _penaAlternativaService: PenaAlternativaService) {
  }

  ngOnInit(): void {
    this._criarForm();

  }

  private _criarForm(): void {
    this.form = this._formBuilder.group({
      id: [null, []],
      horario_inicio: [null, []],
      horario_fim: [null, []],
      data_inicial: [null, []],
      segunda: [0, []],
      terca: [0, []],
      quarta: [0, []],
      quinta: [0, []],
      sexta: [0, []],
      sabado: [0, []],
      domingo: [0, []],
    })
  }

  onSubmit(): void {

  }

  onExibirFrequencia(): void {
    const config: MatDialogConfig = {
      width: '45vw',
    }
    const dialogRef: MatDialogRef<DialogFrequenciaComponent> = this._matDialog.open(DialogFrequenciaComponent, config);
  }
}


