import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectDefault } from '../../../selectModels/selectDefault';
import SituacaoVisitaHelper from 'src/app/utils/functions/situacao-visita-helper';

@Component({
  selector: 'app-select-situacao-visita',
  templateUrl: './select-situacao-visita.component.html',
  styleUrls: ['./select-situacao-visita.component.scss']
})
export class SelectSituacaoVisitaComponent{
  @Input() selectedSituacao!: SelectDefault;
  @Output() selectedSituacaoChange = new EventEmitter<SelectDefault>();

  public opcoes = SituacaoVisitaHelper.RetornarOptionsSituacaoVisita();

  ngOnInit(): void {}

  onChange(): void {
    this.selectedSituacaoChange.emit(this.selectedSituacao);
  }
}
