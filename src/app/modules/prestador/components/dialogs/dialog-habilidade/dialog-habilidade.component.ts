import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'dialog-habilidade',
    templateUrl: 'dialog-habilidade.component.html',
})

export class DialogHabilidadeComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogHabilidadeComponent>,
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