import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AlternativaPenal } from "src/app/utils/models/prestador/entidades/alternativa-penal/alternativa-penal";
import { Familiar } from "src/app/utils/models/prestador/entidades/familiar/familiar";

@Component({
    selector: 'dialog-pena-alternativa',
    templateUrl: 'dialog-pena-alternativa.component.html',
})

export class DialogPenaAlternativaComponent {

    public alternativaPenal = new AlternativaPenal();

    constructor(
        public dialogRef: MatDialogRef<DialogPenaAlternativaComponent>
    ) { }

    clickAdicionar(): void {
        this.dialogRef.close(this.alternativaPenal);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}