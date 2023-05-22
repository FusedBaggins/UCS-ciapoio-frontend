import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Curso } from "src/app/utils/models/prestador/entidades/curso/curso";

@Component({
    selector: 'dialog-curso',
    templateUrl: 'dialog-curso.component.html',
})

export class DialogCursoComponent {

    public curso = new Curso();

    constructor(
        public dialogRef: MatDialogRef<DialogCursoComponent>
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    clickAdicionar(): void {
        this.dialogRef.close(this.curso);
    }
}