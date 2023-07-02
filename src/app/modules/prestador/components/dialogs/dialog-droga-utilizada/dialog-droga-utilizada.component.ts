import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { UsoDroga } from "src/app/utils/models/prestador/entidades/uso-droga/uso-droga";
import { PrestadorService } from "../../../services/prestador.service";
import { SelectDefault } from "src/app/utils/components/selectModels/selectDefault";



@Component({
  selector: 'dialog-droga-utilizada',
  templateUrl: 'dialog-droga-utilizada.component.html',
})

export class DialogDrogaUtilizadaComponent {
  public frequencia = [
    { id: 1, label: 'Diariamente' },
    { id: 2, label: 'Semanalmente' },
    { id: 3, label: 'Ocasionalmente' },
  ];

  public usoDroga = new UsoDroga();
  public drogasSelect: SelectDefault[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogDrogaUtilizadaComponent>,
    private _prestadorService: PrestadorService,
  ) {
    if (data) {
      if (data.usoDroga) {
        this.usoDroga = data.usoDroga;
      }
    }
  }

  ngOnInit(): void {
    this.getDrogas();
  }

  public getDrogas() {
    this._prestadorService.getDrogasSelect().subscribe((data) => {
      this.drogasSelect = data;
    });
  }

  clickCancelar(): void {
    this.dialogRef.close();
  }

  clickAdicionar(): void {
    this.dialogRef.close(this.usoDroga);
  }

}
