import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'dialog-droga-utilizada',
    templateUrl: 'dialog-droga-utilizada.component.html',
})

export class DialogDrogaUtilizadaComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogDrogaUtilizadaComponent>,
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