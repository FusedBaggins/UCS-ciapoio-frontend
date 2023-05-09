import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'dialog-curso',
    templateUrl: 'dialog-curso.component.html',
})

export class DialogCursoComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogCursoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}

export interface DialogData {
    animal: string;
    name: string;
}