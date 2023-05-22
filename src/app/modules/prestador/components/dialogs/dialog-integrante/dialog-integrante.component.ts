import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Familiar } from "src/app/utils/models/prestador/entidades/familiar/familiar";

@Component({
    selector: 'dialog-integrante',
    templateUrl: 'dialog-integrante.component.html',
})

export class DialogIntegranteComponent {

    public familiar = new Familiar();

    constructor(
        public dialogRef: MatDialogRef<DialogIntegranteComponent>
    ) { }

    clickAdicionar(): void {
        this.dialogRef.close(this.familiar);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}