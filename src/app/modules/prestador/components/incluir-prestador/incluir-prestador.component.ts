import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDrogaUtilizadaComponent } from '../dialogs/dialog-droga-utilizada/dialog-droga-utilizada.component';
import { DialogIntegranteComponent } from '../dialogs/dialog-integrante/dialog-integrante.component';
import { DialogExperienciaProfissionaComponent } from '../dialogs/dialog-experiencia-profissiona/dialog-experiencia-profissiona.component';
import { DialogCursoComponent } from '../dialogs/dialog-curso/dialog-curso.component';
import { DialogHabilidadeComponent } from '../dialogs/dialog-habilidade/dialog-habilidade.component';
import { Prestador } from 'src/app/utils/models/prestador/prestador';
import { PrestadorService } from '../../services/prestador.service';
import { FichaMedica } from 'src/app/utils/models/prestador/entidades/ficha-medica/ficha-medica';
import { UsoDroga } from 'src/app/utils/models/prestador/entidades/uso-droga/uso-droga';
import { MatChipListboxChange } from '@angular/material/chips';
import { Deficiencia } from 'src/app/utils/models/prestador/entidades/deficiencia/deficiencia';

@Component({
  selector: 'app-incluir-prestador',
  templateUrl: './incluir-prestador.component.html',
  styleUrls: ['./incluir-prestador.component.scss']
})
export class IncluirPrestadorComponent {

  public prestador = new Prestador();

  public deficiencias = [
    { id: 1, nome: 'Física' },
    { id: 2, nome: 'Visual' },
    { id: 3, nome: 'Auditiva' },
    { id: 4, nome: 'Intelectual' },
    { id: 5, nome: 'Psicossocial' }
  ];

  constructor(
    public dialog: MatDialog,
    private _prestadorService: PrestadorService) {
    this.prestador.fichaMedica = new FichaMedica();
    this.prestador.fichaMedica.usoDrogas = new Array<UsoDroga>();
  }

  public abreDialogDrogaUtilizada(): void {
    const dialogRef = this.dialog.open(DialogDrogaUtilizadaComponent, { data: {}, });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.prestador.fichaMedica.usoDrogas.push(result);
      }
    });
  }

  public deficienciaMudou(event: MatChipListboxChange): void {
    console.log(event.value);
    this.prestador.fichaMedica.deficiencias = event.value;
  }

  public abreDialogIntegrante(): void {
    const dialogRef = this.dialog.open(DialogIntegranteComponent, { data: {}, });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public abreDialogExperienceiaProfissional(): void {
    const dialogRef = this.dialog.open(DialogExperienciaProfissionaComponent, { data: {}, });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public abreDialogCurso(): void {
    const dialogRef = this.dialog.open(DialogCursoComponent, { data: {}, });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public abreDialogHabilidade(): void {
    const dialogRef = this.dialog.open(DialogHabilidadeComponent, { data: {}, });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public adicionaPrestador(): void {
    console.log(this.prestador);
    this._prestadorService.addPrestadores(this.prestador).subscribe(() => { });
  }

}
