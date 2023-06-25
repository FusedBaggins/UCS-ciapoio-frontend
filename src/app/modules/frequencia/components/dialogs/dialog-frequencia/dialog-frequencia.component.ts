import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AtestadoFrequencia } from "src/app/utils/models/atestado-frequencia";
import { Curso } from "src/app/utils/models/prestador/entidades/curso/curso";

@Component({
    selector: 'dialog-frequencia',
    templateUrl: 'dialog-frequencia.component.html',
})

export class DialogFrequenciaComponent {

    public frequencia = new AtestadoFrequencia();

    constructor(
        public dialogRef: MatDialogRef<DialogFrequenciaComponent>
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    clickAdicionar(): void {
        this.dialogRef.close(this.frequencia);
    }
}