import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'dialog-integrante',
    templateUrl: 'dialog-integrante.component.html',
})

export class DialogIntegranteComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogIntegranteComponent>,
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