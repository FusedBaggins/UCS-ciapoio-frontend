import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CidadeService } from 'src/app/utils/services/cidade.service';
import { SelectDefault } from '../../../selectModels/selectDefault';

@Component({
  selector: 'app-select-cidade',
  templateUrl: './select-cidade.component.html',
  styleUrls: ['./select-cidade.component.scss']
})
export class SelectCidadeComponent implements OnInit {

  @Input() selectedCidade!: SelectDefault;
  @Output() optionsLoaded: EventEmitter<void>;
  @Output() selectedCidadeChange!: EventEmitter<SelectDefault>;

  cidades$!: Observable<SelectDefault[]>;

  constructor(private _cidadeService: CidadeService) {
    this.optionsLoaded = new EventEmitter<void>();
    this.selectedCidadeChange = new EventEmitter<SelectDefault>();
  }

  ngOnInit(): void {
    this.cidades$ = this._cidadeService.getCidades().pipe(
      tap(() => this.optionsLoaded.next())
    );
  }

  onChange(): void {
    this.selectedCidadeChange.emit(this.selectedCidade);
  }
}
