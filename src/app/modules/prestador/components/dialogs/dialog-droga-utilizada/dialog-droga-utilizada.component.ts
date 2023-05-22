import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { UsoDroga } from "src/app/utils/models/prestador/entidades/uso-droga/uso-droga";

@Component({
    selector: 'dialog-droga-utilizada',
    templateUrl: 'dialog-droga-utilizada.component.html',
})

export class DialogDrogaUtilizadaComponent {

    public usoDroga = new UsoDroga();

    constructor(
        public dialogRef: MatDialogRef<DialogDrogaUtilizadaComponent>
    ) { }

    clickCancelar(): void {
        this.dialogRef.close();
    }

    clickAdicionar(): void {
        this.dialogRef.close(this.usoDroga);
    }

}