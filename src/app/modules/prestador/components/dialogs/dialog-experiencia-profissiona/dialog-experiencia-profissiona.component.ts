import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'dialog-experiencia-profissiona',
    templateUrl: 'dialog-experiencia-profissiona.component.html',
})

export class DialogExperienciaProfissionaComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogExperienciaProfissionaComponent>,
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