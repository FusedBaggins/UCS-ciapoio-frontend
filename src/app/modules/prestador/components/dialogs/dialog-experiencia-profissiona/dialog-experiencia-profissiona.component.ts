import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Trabalho } from "src/app/utils/models/prestador/entidades/trabalho/trabalho";

@Component({
    selector: 'dialog-experiencia-profissiona',
    templateUrl: 'dialog-experiencia-profissiona.component.html',
})

export class DialogExperienciaProfissionaComponent {

    public trabalho = new Trabalho();

    constructor(
        public dialogRef: MatDialogRef<DialogExperienciaProfissionaComponent>
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    clickAdicionar(): void {
        this.dialogRef.close(this.trabalho);
    }
}