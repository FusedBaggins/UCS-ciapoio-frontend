import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { VaraService } from 'src/app/modules/vara/services/vara.service';
import { SelectDefault } from '../../../selectModels/selectDefault';

@Component({
  selector: 'app-select-vara-penal',
  templateUrl: './select-vara-penal.component.html',
  styleUrls: ['./select-vara-penal.component.scss']
})
export class SelectVaraPenalComponent {
  @Input() selectedVara!: SelectDefault;
  @Output() optionsLoaded: EventEmitter<void>;
  @Output() selectedVaraChange!: EventEmitter<SelectDefault>;

  varas$!: Observable<SelectDefault[]>;

  constructor(private _varaService: VaraService) {
    this.optionsLoaded = new EventEmitter<void>();
    this.selectedVaraChange = new EventEmitter<SelectDefault>();
  }

  ngOnInit(): void {
    this.varas$ = this._varaService.getSelectVaras().pipe(
      tap(() => this.optionsLoaded.next())
    );
  }

  onChange(): void {
    this.selectedVaraChange.emit(this.selectedVara);
  }
}
