import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Habilidade } from "src/app/utils/models/prestador/entidades/habilidade/habilidade";

@Component({
  selector: 'dialog-habilidade',
  templateUrl: 'dialog-habilidade.component.html',
})

export class DialogHabilidadeComponent {

  public habilidade = new Habilidade();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogHabilidadeComponent>
  ) {
    if (data) {
      if (data.habilidade) {
        this.habilidade = data.habilidade;
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  clickAdicionar(): void {
    this.dialogRef.close(this.habilidade);
  }
}
