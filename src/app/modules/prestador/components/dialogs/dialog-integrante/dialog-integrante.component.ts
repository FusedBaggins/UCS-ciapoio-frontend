import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Familiar } from "src/app/utils/models/prestador/entidades/familiar/familiar";

@Component({
  selector: 'dialog-integrante',
  templateUrl: 'dialog-integrante.component.html',
})

export class DialogIntegranteComponent {

  public familiar = new Familiar();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogIntegranteComponent>
  ) {
    if(data){
      if(data.familiar){
        this.familiar = data.familiar;
      }
    }
  }

  clickAdicionar(): void {
    this.dialogRef.close(this.familiar);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
